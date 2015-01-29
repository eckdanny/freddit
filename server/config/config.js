/* jshint node: true */
'use strict';

module.exports = {
  ELASTICSEARCH: {
    apiVersion: '1.4',
    host: 'localhost:9200'
  },
  SERVER: {
    PORT: process.env.SERVER_PORT || 3000
  }
};