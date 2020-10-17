const express = require('express'); // File path is not need because we already installed the express framework, so Node already knows automatically where to look.

const hostname = 'localhost'; // the server hostname as a const variable
const port = 3000; // port the server will be listening on

const app = express(); //returns a express server application that will be available to us, in a (const) variable named app.

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
}); // returns the same response for any request - the use() function takes a callback function - callback function = special function in express that's called a middleware function - middleware function = has access to three parameters (req, res, and next)

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`) // callback function - this is printed to the console
}) // Creates an instance of the http server class and starts listening to it