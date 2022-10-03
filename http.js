const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("Hello there")
        res.end()
    }
    if(req.url=="/api/courses"){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
})
server.listen(3030)
console.log("listening on 3030")
