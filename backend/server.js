const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    let url=req.url;
    let home=fs.readFileSync('./home.html')
    let about=fs.readFileSync('./about.html')
    let contact=fs.readFileSync('./contact.html')
    console.log(url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(url=='/'){
        res.write(home)
    }
    else if(url=='/about'){
        res.write(about)
    }
    else if(url=='/contact'){
        res.write(contact)
    }
    else{
        res.write('page not found broo')
    }
    res.end()
})
server.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Server started at the port 3000');
    }
})