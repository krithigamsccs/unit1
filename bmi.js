import express from "express"
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + "/bmi.html")
});
app.post("/",(req,res)=>{
    
    var weight = req.body.Weight;
    var height = req.body.height;
    var result = (weight * 703) / (height * height);
    console.log(result);
    res.send("Your BMI value is: "+result);
});
app.listen(port,()=>{
    console.log("listening to the port 3000")
});