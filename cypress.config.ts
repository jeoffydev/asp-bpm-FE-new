import { defineConfig } from "cypress";
require('dotenv').config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.EMAILOWNER = process.env.REACT_APP_EMAIL;
      config.env.PWOWNER = process.env.REACT_APP_PW;
      config.env.LOGINLINK = process.env.REACT_APP_CYPRESS_LOGIN_LINK;

      config.env.EMAILADMIN = process.env.REACT_APP_ADMIN_EMAIL;
      config.env.PWADMIN = process.env.REACT_APP_ADMIN_PW;


      // return config
      return config
    },
  },
});
