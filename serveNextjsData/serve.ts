import http from 'http';

/** Provides Next.js with static files and data */
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    switch (req.url) {
      case '/api/news': {
        res.end(JSON.stringify([{name:`entry from ${new Date()}`}]));
        return;
      }
      case '/shutdown':
        res.end();
        return process.exit(0);
    }
  } catch (err) {
    res.writeHead(500);
    res.end();
  }
});

server.listen(3001, () => console.log('Serving dummy news on port', 3001));
