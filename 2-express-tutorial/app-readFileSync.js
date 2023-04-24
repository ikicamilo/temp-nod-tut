const { readFileSync } = require('fs');
const http = require('http')
  
const homePage = readFileSync(require.resolve('./navbar-app/index.html'))
const homeStyles = readFileSync(require.resolve('./navbar-app/styles.css'))
const homeImage = readFileSync(require.resolve('./navbar-app/logo.svg'))
const homeLogic = readFileSync(require.resolve('./navbar-app/browser-app.js'))

const server = http.createServer((req, res) => {
    // console.log(req.method);
    const url = req.url;
    // home page
    if(url === '/'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(homePage)
    }
    else if(url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end('<h1>About Page</h1>')
    }else if(url === '/styles.css'){
        res.writeHead(200, { 'content-type': 'text/css' })
        res.end(homeStyles)
    }else if(url === '/logo.svg'){
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.end(homeImage)
    }else if(url === '/browser-app.js'){
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.end(homeLogic)
    }else{
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end('<h1>page not found</h1>')
    }
})

server.listen(5000)