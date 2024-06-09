const http = require('http');
const fs = require('fs');
const path = require('path');

//helper function
const serveFile = (res, filePath, contentType) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
};

// http server
const server = http.createServer((req, res) => {
    const route = req.url;

    switch (route) {
        case '/':
            serveFile(res, path.join(__dirname, 'pages', 'home.html'), 'text/html');
            break;
        case '/books':
            serveFile(res, path.join(__dirname, 'pages', 'books.html'), 'text/html');
            break;
        case '/authors':
            serveFile(res, path.join(__dirname, 'pages', 'authors.html'), 'text/html');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 - Page Not Found');
            break;
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});