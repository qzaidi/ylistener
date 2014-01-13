var watcher = require('process-watcher');

var watcher_config = {
  max_inactive : 0.001,
  monitor : 0.001,
  monPath: '/tmp/nodejs.mon',
  timeout : 3,
  timeout_start : 60
};

var watcher_instance = new watcher.Watcher({
  config : watcher_config
});
