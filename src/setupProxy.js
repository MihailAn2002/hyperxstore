// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/api', // URL, который будет проксироваться
//     createProxyMiddleware({
//       target: 'https://online.moysklad.ru', // URL вашего сервера Moysklad
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '/api/remap/1.2/entity', // Правильный путь к API Moysklad
//       },
//     })
//   );
// };