"use strict";

var monitor = {
  /**
   * Initialize a client app
   *
   **/
  client: function(app) {
    var modstatus;
    var monitr;
  
    if (process.platform = 'linux') {
      modstatus = require('mod_statuspage');
      monitr = require('monitr');

      monitr.start();

      app.use(status());

      process.on('exit', function() {
        monitr.stop();
      });
    }
  }

};

module.exports = monitor;
