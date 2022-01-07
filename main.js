const express = require("express");
const app = express();
app.get("./users",(req,res) => {
    let.obj = { message: "Message received  on Application"};
    res.json(obj);
}
);
app.listen(4000,() =>console.log("Server Started"));