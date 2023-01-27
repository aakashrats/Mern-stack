const http =require('http');
const Server= http.createServer((req,res)=>{
    var a=9;
    var b=46;
    var c=a+b;

    res.write("sum is  "+c);
    
    res.end();

}
);
Server.listen(6700,()=>{
    console.log("listeing server")
});
