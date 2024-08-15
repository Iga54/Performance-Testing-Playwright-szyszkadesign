import { expect, test } from '@playwright/test';
import { chromium } from 'playwright';

test.describe('Performance testing -  FCP, LCP', () => {
  let browser;
  let page;
  test.beforeEach(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('/');
  });
  test.afterEach(async () => {
    await browser.close();
  });

  test('Measuring First Contentful Paint that should be under 2 seconds', async () => {
    const fcpEntry = JSON.parse(
      await page.evaluate(() => {
        const entries = window.performance.getEntriesByName('first-contentful-paint');
        return JSON.stringify(entries[0]);
      }),
    );
    const fcp = fcpEntry.startTime;
    //Assert:
    expect(fcp).toBeLessThan(2000);
  });

  test('Measuring Largest Contentful Paint that should be under 2,5 seconds', async () => {
    //Act:
    const largestContentfulPaint = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          resolve(entries[entries.length - 1]);
        }).observe({
          type: 'largest-contentful-paint',
          buffered: true,
        });
      });
    });
    //Assert:
    expect(largestContentfulPaint.startTime).toBeLessThan(2500);
  });
});
