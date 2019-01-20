class HapiInterface {
  constructor(options) {
    this.server = options.instance.server({ port: 3000, host:'localhost' })
    this.router = options.router;
    this.routes();
  }
  async _init() {
    await this.server.start();
    console.log(`Server hapi corriendo en ${this.server.info.uri}`);
  }

  routes() {
    this.router.forEach((route) => {
      this.server.route({
        method: route.method,
        path: route.url,
        handler: route.handler
      })
    })
  }

  run() {
    this._init();
  }
}

module.exports = HapiInterface;
