const { appendFile } = require("fs");
const http = require("http");

const handleRequest = (request, response) =>{
    // console.log(request.method);
    // console.log(request.url);
    // console.log(request.headers);
    // console.log(request.body);
    // console.log("========");
    // response.end("hi there");
    // if(request.method ==="POST"){
    //     response.writeHead(400);
    //     return response.end("sorry ga melayani request POST")
    // }
    // if(request.method ==="GET"){
    //     return response.end("Response HTTP reuest menggunakan GET")
    // }
    // if(request.method ==="PUT"){
    //     return response.end("Response HTTP reuest menggunakan PUT")
    // }
    // if(request.method ==="DELETE"){
    //     return response.end("Response HTTP reuest menggunakan DELETE")
    // }
    // return response.end("Method tidak diketahui")
    // app.get("/users",(){

    // })
    const dataSiswa = {
        nama: "Enrico",
        kelas: "Gold Binar",
    };
    
    console.log(typeof dataSiswa);
    console.log(typeof JSON.stringify(dataSiswa));

    response.writeHead(200, {"Content-Type":"application/json"});

    return response.end(JSON.stringify(dataSiswa));

    response.status(200).JSON(dataSiswa);
}

http.createServer(handleRequest).listen(8000);