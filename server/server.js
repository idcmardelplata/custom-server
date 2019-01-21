const ExpressInterface = require("../interfaces/web/express_interface");
const HapiInterface = require("../interfaces/web/hapi_interface");
const WebServer = require("../interfaces/web/web_interface")

//new WebServer({
  //interface: new ExpressInterface({
    //instance: require("express"),
    //router: require("./routes")
  //})
//})
 
new WebServer({
  interface: new HapiInterface({
    instance: require("hapi"),
    router: require("./routes")
  })
})
