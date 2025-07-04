// @ts-check
const { devices } = require('@playwright/test');
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path : path.resolve('testdata','.env')
})
const config = {
  testDir: './tests',
  retries :1,
  workers: 3,
  /* Maximum time one test can run for. */
  //10-
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  projects : [
    /*{
      name : 'safari',
      use: {

        browserName : 'webkit',
        headless : true,
        screenshot : 'off',
        trace : 'on',//off,on 
        ...devices['iPhone 11'],    
      }

    },*/
    {
      name : 'chrome',
      use: {

        browserName : 'chromium',
        headless : false,
        screenshot : 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors:true,
        permissions:['geolocation','notifications'],
         // Emulates the user locale.
        locale: 'en-GB',
        // Grants specified permissions to the browser context.
    

    // Emulates the user timezone.
        timezoneId: 'Europe/Paris',
        
        trace : 'on',//off,on
       // ...devices['']
     //   viewport : {width:720,height:720}
         }

    }
    ]

};

module.exports = config;
