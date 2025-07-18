// const http = require("http");
 
// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{"content-type":"text/plain"})
// res.end("server is running")
// }) ;   //parenthesis ke ander 2 cheeze hogi request and response     we use anynonimous function  
// const port = 8080;
// server.listen(8080,()=>{
//     console.log(`server is runing on http://localhost:${port}`);
    
// });

//making server using express.js dont see package lock json and node modules it not for our use 

// const express = require("express")
// const data =require("./data.json")
// // step 1 evoke express  and call express
// const app = express();
// //routes = is route pe konsa api kaam karega kisi bhi api me base url hota hai like http://localhost:8080/(slash is default end point)
// // base url/login  =>uske namm se samaj jayega ki api ka kya kaam hai like login, signup etc we assign api according to task
// //base url/signup
// //base url/products => data fetch  karne ke liye 

// //we define default route 

// app.get("/",(req,res)=>{
//     res.status(200).send("<h1 style='color:yellow'>hi welcome to rb server<h1/>")//default route
// });
// app.get("/products",(req,res)=> {
// res.send(data)

// });

// const port = 8080;
// app.listen(port,()=>{
//     console.log(`server is running at http://localhost:${port}`);
    
// })
// app.get("/products",(req,res)=> {
// res.send(data)

// });


// //we install nodemon for updating again and again ok
// //to run we use npm run server




// const fs = require('fs');
// const express = require("express");



// const { error } = require('console');
// const { ifError } = require('assert');
/* mmy own create fs******************************************************* */
// const app = express()
// const port = 8080

// app.get("/",(req,res)=>{
//   fs.writeFile("file.txt"," hello world","utf-8",(error)=>{
//     if (error){
//       console.log("error");
//       return; 
//     }
//     console.log("it is successfully read");
//     res.send("hello this is my documentation ");
//   })
    
// });

// app.get("/read",(req,res)=>{
//   fs.readFile("file.txt","utf-8",(error)=>{
//     if (error){
//       console.log("error");
//       return; 
//     }
//     console.log("it is successfully read");
//     res.send("ding ding ");
//   })
    
// });
// app.get("/delete",(req,res)=>{
//   fs.unlink("file.txt",(error)=>{
//     if (error){
//       console.log("error");
//       return; 
//     }
//     console.log("it is successfully read");
//     res.send("doraemon");
//   })
    
// });


// app.listen(port,()=>{
//   console.log(`server is running at http://localhost:${port}`);

// });
// const cowsay = require('cowsday');
// const { request } = require('express');
// app.get('/',(req,res)=>{
//   console.log(cowsay.say);
//   text:"hello","i am ok!",
//   e: 
// })

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));


















