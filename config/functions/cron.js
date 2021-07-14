'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

const JWPlatformAPI = require('jwplatform');
const jwApi = new JWPlatformAPI({ apiKey: 'sfDjVyNo', apiSecret: 'PAsxRS24zHM7NoNXSFC8ZMw2'});


module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  '*/10 * * * * *': async () => {
    console.log('Cas: ' + new Date())
    jwApi.videos.conversions.list({video_key:'wEwwIggy'}).then((response) => {
      console.log(response)
    })
  }
};
