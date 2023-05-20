import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'https://practice.cydeo.com/',
    env:{
      login:"/login"
    },
    video:false,//it will not create video
    retries:1,
    defaultCommandTimeout:5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
