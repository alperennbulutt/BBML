const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/dashboard", {
      target: "https://api.muranomlbb.com/Auth/AccessToken",
      changeOrigin: true,
    })
  );
};
