const jsonServer = require('json-server');
const morgan = require('morgan');
const rewrites = require('./routes.mock.json');

const server = jsonServer.create();
const router = jsonServer.router('./mock/db.mock.json');
const middlewares = jsonServer.defaults({ logger: false });

server.use(jsonServer.rewriter(rewrites));
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// Add logging format
server.use(morgan('dev', { colors: true }));

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST')
    req.body.createdAt = Date.now();
  next();
})

// Authentication
const restrictedRoutes = [];
server.use((req, res, next) => {
  if (restrictedRoutes.includes(req.path)) {
    // Valid access token
    next();
  } else {
    next();
  }
});

// Use default router
server.use('/api', router)
server.listen(3000, () => {
  console.log('JSON Server is running');
})

// npm script - "mock": "json-server --watch mock/index.js --config mock/mock.config.json"
// const glob = require('glob');
// const fs = require('fs');

// const mockFilePaths = glob.sync(path.resolve(__dirname, './api') + '/**/[!_]*.mock.*', {
//   nodir: true
// });

// const apiData = {};
// const routes = {};
// mockFilePaths.forEach(filePath => {
//   const api = require(filePath);
//   let [, url] = filePath.split('mock/');
//   url = url.slice(url.length - 9) === '/index.js'
//     ? url.slice(0, url.length - 9)
//     : url.slice(0, url.length - 10);
//   apiData[url.replace(/\//g, '-')] = api;
//   routes[`/${url}`] = `/${url.replace(/\//g, '-')}`;
// });

// fs.writeFileSync('./mock/mock.routes.json', JSON.stringify(routes, null, 2));

// module.exports = () => apiData;
