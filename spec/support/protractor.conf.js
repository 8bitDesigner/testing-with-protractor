var server = require(__dirname + '/../../index')

exports.config = {
  specs: [
    '../e2e/*.js',
  ],
  framework: 'jasmine2',
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  beforeLaunch: server.boot,
  afterLaunch: server.close
}
