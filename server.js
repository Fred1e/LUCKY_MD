const http = require('http');
const fs = require('fs');
const path = require("path");

const page = path.join(__dirname, "media", "site")


function server(req,res) {
  console.log('---')
  console.log(`server: GET '${req.url}'`);
  if (req.url === '/') {
    fs.readFile(path.join(page, 'index.html'), (err,data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
        console.log(`server: response 404 'Not Found'`);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
        console.log(`server: response 200 'index.html'`);
      }
    });
  } else if (req.url === '/style.css'){
    fs.readFile(path.join(page,"assets", "style.css"), (err,data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
        console.log(`server: response 404 'Not Found'`);
      } else {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(data);
        console.log(`server: response 200 'style.css'`)
      }
    });
  }
}

function start(port) {
  port = parseInt(port);
  if (isNaN(port)){
    console.log('⚠️ ERROR PORT must be an integer !!! \n`ℹ️ using port 8000');
    port = 8000;
  }
  
  try {
    const s = http.createServer(server).listen(port, () => {
      console.log(`ℹ️ server started at port: ${port}`)
    });
    process.on('SIGINT',() => {
      console.log('👋 server shutting down...');
      s.close(() => process.exit(0));
    });
  } catch (e){
    console.log(`⚠️ ERROR starting server at port: ${port} error: ${e.message}`)
  }
}

module.exports = {
  start : start
    }
