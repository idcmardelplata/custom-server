const ExpressInterface = require("../components/web/express_interface");
const HapiInterface = require("../components/web/hapi_interface");
const WebServer = require("../components/web/web_interface")

new WebServer({
  interface: new ExpressInterface({
    instance: require("express"),
    router: require("./routes")
  })
})
 
//new WebServer({
  //interface: new HapiInterface({
    //instance: require("hapi"),
    //router: require("./routes")
  //})
//})
