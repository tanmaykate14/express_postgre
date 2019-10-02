


const express = require("express") ;

const bodyParser = require("body-parser")

const app = express() ;

const PORT = process.env.PORT || 8000 ;

const db = require("./queries")


app.get("/",(req,res)=>{
res.json({Info:"Welcome to Express/PostgreAPI page"})
})

app.get("/getCustomers",db.getCustomers);









app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})