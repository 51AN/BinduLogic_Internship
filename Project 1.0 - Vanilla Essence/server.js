const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const books = [
    {title: 'Twilight', description:'Love story between a human and a vampire'}
] // Array to store books in server temporarily
const authors = [
    { name: 'Stephenie Meyer', bio: 'Vampires and werewolfs are her favorite things' },
    { name: 'John Blake', bio: 'He lives for the thrill' },
    { name: 'William Shakespear', bio: 'A master of the art of writing' }
] // Array for Authors

// Helper function
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

// HTTP server
const server = http.createServer((req, res) => {
    const route = req.url;
    const method = req.method;

    if (method === 'GET') {
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
            case '/books/data':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(books));
                break;
            case '/authors/data':
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(authors));
                    break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 - Page Not Found');
                break;
        }
    } else if (method === 'POST' && route === '/books/new') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parsedData = querystring.parse(body);
            const newBook = {
                title: parsedData.title,
                description: parsedData.description
            };

            books.push(newBook);

            res.writeHead(302, { 'Location': '/books' });
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});