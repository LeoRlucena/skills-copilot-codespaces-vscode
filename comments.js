// Create web server and listen for requests on port 3000
// Respond with a JSON array of comments
const http = require('http');
const comments = require('./data/comments.json');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
  });

  if (req.method === 'GET') {
    res.end(JSON.stringify(comments));
  } else {
    res.end();
  }
}).listen(3000, () => {
  console.log('Server listening on port 3000');
});