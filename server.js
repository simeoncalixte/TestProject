import express from "express";
import fs from 'fs';
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/", (req,res) => {
    console.log(req);
    res.append("Content-type","text/html");
    const htmlFile = fs.readFileSync('./public/index.html');
    res.send(htmlFile);
})


app.post("/", (req,res) => {
    console.log({body: req.body});
    res.send()
})


app.listen(3000,()=>{
    "server is open"
});