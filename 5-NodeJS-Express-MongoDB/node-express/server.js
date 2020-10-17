const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/campsites/:campsiteId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




























// const express = require('express'); // File path is not need because we already installed the express framework, so Node already knows automatically where to look.
// const morgan = require('morgan'); //
// const bodyParser = require('body-parser'); //

// const hostname = 'localhost'; // the server hostname as a const variable
// const port = 3000; // port the server will be listening on

// const app = express(); //returns a express server application that will be available to us, in a (const) variable named app.
// app.use(morgan('dev'));
// app.use(bodyParser.json()); // when the server receives requests with json formatted data in the body, this middleware will handle parsing that data into properties of the request object, allowing us to access that data more easily.

// app.all('/campsites', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain') // Sending back plain text
//     next(); // Pass control of the application routing to the next relevant routing method after this one, otherwise it'll just stop here and not go any further
// }); // Routing method that's a catch all for all HTTP verbs => any HTTP requests to this path will trigger this method.

// app.get('/campsites', (req, res) => {
//   res.end('Will send all the campsites to you'); // send a message body back to the client
// });

// app.post('/campsites', (req, res) => { // typically carry information in the body of the message
//   res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
// });

// app.use(express.static(__dirname + '/public')); // refers to the absolute path of the current directory of the file that it's in -> this is all we need to serve static files from the 'public' folder 

// app.use((req, res) => {
//   // console.log(req.headers); -> morgan will now handle this
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>This is an Express Server</h1></body></html>');
// }); // returns the same response for any request - the use() function takes a callback function - callback function = special function in express that's called a middleware function - middleware function = has access to three parameters (req, res, and next)

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`) // callback function - this is printed to the console
// }) // Creates an instance of the http server class and starts listening to it