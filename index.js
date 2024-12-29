const http = require('http');
const httpProxy = require('http-proxy');

const target = process.env.MAP_SERVER_URL; // Например, "http://your-minecraft-server:8080"

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  if (!target) {
    res.statusCode = 500;
    res.end('MAP_SERVER_URL is not set');
    return;
  }
  proxy.web(req, res, { target });
});

server.listen(3000, () => {
  console.log('Proxy server is running on process.env.MAP_SERVER_URL');
});
