const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo ={
    host: "localhost",
    user : "root",
    password : "cdac",
    database : "message",

}

const selectAllUser = async() =>{
    const.connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
}

const addUser = async(user) => {
    const.connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
}

connection.connect();
let sql = `insert into msg (msgername,msgcontext) values ("chetan","Heyy...how are you???")`;
connection.query(sql);
connection.queryAsync(sql [user.msgername, user.msgcontext])
console.log("Messages showed!!!");
await connection.endAsync();
module.exports ={selectAllUser, addUser};