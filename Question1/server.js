import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3050
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/companies/:companyname/categories/:categoryname/products',(req,res)=>{
    const companyname = req.params.companyname
    const categoryname = req.params.categoryname

    const n = req.query.top
})


app.listen(port,()=>{
    try{
        console.log(`server is running on '${port}'`)
    } catch(error){
        console.log(error);
    }
})