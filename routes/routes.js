const request = require("request");

var appRouter = function(app) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get("/api/:version/:feature/:type", function(req, out) {
    request("https://cobalt.qas.im"  + req.originalUrl, {
      json: true
    }, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      out.status(200).send(body);


    });
  });

}

module.exports = appRouter;
