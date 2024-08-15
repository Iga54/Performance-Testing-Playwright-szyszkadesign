#  Testing First Contentful Paint and Largest Contentful Paint

## Project description

The project was created to verify whether First Contentful Paint and Largest Contentful Paint do not exceed imposed time (in case of FCP 2 seconds-, LCP - 2.5 seconds). This metrics are profound for evaluating website loading performance and have impact on user experience.

- First Contentful Paint measures the time from when the page starts loading to when the browser renders the first piece of content, such as text, images

- Largest Contentful Paint measures the time from when the page starts loading to when the largest visible content element (e.g., a large image or block of text) is rendered

In addition, testing metrics mentioned above help in identification of performance issues such as large resources, non-optimized images, or rendering problems, allowing for their resolution.

## Project configuration

1. The first step is to run a command `npm install` in terminal
2. Run the command `npm run test`
3. To run eslint type `npm run eslint`

## Frameworks used in the project

The project was written using TypeScript. Main frameworks and their versions are described below:

- @playwright/test - framework for test automation for web applications which allows running tests using different browsers (in case of given project - Chromium were exploited)

- @types/node - set of type definitions for Node.js, designed for use with TypeScript. These types enable better autocompletion, type checking, and documentation in the IDE

- prettier - useful tool for automatic code formatting and ensuring consistency of code style in a project

- eslint - is a tool for static code analysis in JavaScript. Eslint focuses on identifying and fixing potential errors and enforcing coding standards
