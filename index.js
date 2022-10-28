const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    )
    let contentType = getContentType(filePath) || 'text/html'
    let errorPage = path.join(__dirname, 'error.html')
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(errorPage, 'utf8', (err, content) => {
                    res.writeHead(200, { 'Content-Type': contentType })
                    res.end(content)
                })
            } else {
                res.writeHead(500)
                res.end('A server error has occured')
            }
        }
        if (!err) {
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content)
        }
    })
})

const getContentType = (filePath) => {
    let extname = path.extname(filePath)
    if (extname === '.js') {
        return 'text/javascript'
    }
}

const port = 5000

server.listen(5000, '127.0.0.1')
console.log('server is running')