// var http=require("http");

// var clg=require("./Cybrom")

// http.createServer((req,res)=>{
//     res.write("welcome to my college");
//     res.write(clg.mycollege());
//     res.write("welcome to my fees");
//     res.write(clg.myfess());
//     res.end();

// }).listen(8000);





// read the file
// var http=require("http");
// var fs=require("fs");

// http.createServer((req,res)=>{
//     fs.readFile("adi.txt",(err,data)=>{
//         res.write(data);

//         res.end();
//     })
// }).listen(8000);


//append


var fs=require("fs");

fs.appendFile("raj.txt","welcome to cybrom bhopal",(err)=>{
    if(err) throw err;
    console.log("file succefully created");
})


