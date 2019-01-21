const {ExpressInterface, HapiInterface, WebServer} = require("../interfaces/web")

/* TODO:
 * Modificar el sistema de rutas para que funcione
   independientemente del framework web elegido. */

new WebServer({
  interface: new HapiInterface({
    instance: require("hapi"), router: require("./routes") }) 
})
