
class WebServer {
  constructor(options) {
    this.server = options.interface;
    this.server.run();
  }

}

module.exports = WebServer;
