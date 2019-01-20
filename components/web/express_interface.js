class ExpressInterface {
  constructor(options) {
    this.server = options.instance();
    this.router = options.router;
    this.routes();
  }

  routes() {
    this.router.forEach((route) => {
     this.server[route.method](route.url, route.handler)
      console.log(route)
    })
  }

  run() {
    this.server.listen(3000, () => console.log(`Server express corriendo en el puerto 3000`))
  }
}

module.exports = ExpressInterface;
