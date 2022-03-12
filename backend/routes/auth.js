const express = require("express");
const db = require("../startup/mysqlconnection");
const route = express.Router();

route.post("/customerLogin",async (req, res) => {

    var phone = req.body.phone+'';
    var password = req.body.password+'';
    const user = await  db.execute("SELECT * FROM ds.user where phone=? and password=?",[phone, password]);
        if (user[0] != "") {
         let user2 = {
                'fname': user[0][0].fname,
                'lname': user[0][0].lname,
                'phone': user[0][0].phone,
                'role' : user[0][0].role
            };
            return res.send({ 'token': user2 });
        } else{
            return res.send(404,{ 'error': `email or password is not correct` });
        }
});

module.exports = route;