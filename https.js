const http= require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url === '/about'){
        res.end('here is our about page')
    }
    res.end(
        ` <h1>Oops!</h1>
        <p> we can't find the page you are in need of </p>
        <a href = "/" > Go Back </  a>
        `
    )
})

server.listen(4000);