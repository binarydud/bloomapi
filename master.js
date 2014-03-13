require('shelljs/make');
var logger = require('./lib/logger');
logger.server.info('starting bloomapi');
  require('./lib/api/server');
