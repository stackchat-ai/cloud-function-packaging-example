# Cloud Function Example with TypeScript and Webpack

This repository provides a sample [Cloud Function](https://docs.stackchat.com/Bot-Builder/Cloud-Functions/Introduction.html) for the [Stackchat Platform](https://stackchat.com/) which illustrates:
  - calling a 3rd-party API
  - dynamically generating a carousel
  - a basic unit test
  - using TypeScript instead of vanilla JS
  - bundling additional dependencies

## Developer Set-up
Just clone this repo, install the dependencies (`yarn` or `npm i`) and build (`yarn run build` or `npm run build`). This will produce a `dist/cloud-functions.js` file which can be uploaded via the Cloud Functions section of the Stackchat dashboard for your bot.

## Implementation Notes
1. `request-promise` is used here to illustrate packaging a 3rd-party dependency. For making API calls generally, `node-fetch` is already available (as `fetch`) to your code at runtime without requiring any additional packaging or import statements.

2. The "externals" section of the webpack configuration will omit bundling of the `dc` and `fetch` dependencies that are available at runtime. This can be removed if you want to provide and use a different version.
