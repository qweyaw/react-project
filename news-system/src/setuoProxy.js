import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api",
      {
        target: "http://localhost:8888/api",
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    )
  );
};
