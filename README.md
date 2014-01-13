ylistener
=========

npm package for yahoo process-watcher

Installation
------------

sudo npm install -g git://github.com/qzaidi/ylistener.git

sudo is required so that upstart service can be installed in /etc/init


Usage
-----

Install globally on systems that support it. Then inside the app server,

var ylistener = require('ylistener');

var app = express();
...
...
ylistener.client(app);
