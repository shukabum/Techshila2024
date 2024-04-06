const express = require('express');
const cors = require('cors');
const PORT = 8080;
const app= express();
app.use(cors);
app.listen(PORT,()=>{
    return console.log(`Sever is running on the ${PORT}`)
})