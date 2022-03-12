const express = require("express");
const db = require("../startup/mysqlconnection");
const route = express.Router();
route.use(express.json())

// add customers
route.post("/signup/", async(req, res) => {
    try{
        const fname = req.body.fname;
        const lname = req.body.lname;
        const phone = req.body.phone;
        var password = req.body.password;
        const balance = req.body.balance;
        const isExisBefor = await db.execute("select * from user where phone=? ", [phone]);
        if (isExisBefor[0] != "") return res.send({ "message": "phone number is already exist" });

        const sqlStatment = "INSERT INTO `user`( `fname`, `lname`,`phone`,`password`, `balance`) values (?,?,?,?,?)";
        await db.execute(sqlStatment, [fname, lname, phone, password, balance]);
        return res.send({ "message": "true" });
        }catch(err){
                console.log(err);
                return res.send({ "message": "false" });
        }
});

// add clerk
route.post("/addClerk/", async(req, res) => {

        const fname = req.body.fname;
        const lname = req.body.lname;
        const phone = req.body.phone;
        var password = req.body.password;
        const balance = req.body.balance;

        const isExisBefor = await db.execute("select * from user where phone=? ", [phone]);
        if (isExisBefor[0] != "") return res.send({ "message": "phone number is already exist" });

        const sqlStatment = "INSERT INTO `user`( `fname`, `lname`,`phone`,`password`, `balance`, `role`) values (?,?,?,?,?,?)";
        await db.execute(sqlStatment, [fname, lname, phone, password, balance,'clerk']);
        return res.send({ "message": "true" });
});

route.get("/getuser/:phone", async(req, res) => {
    if (!req.params.phone) return res.send("phone require.")
    const user = await db.execute("select * from user where phone=? limit 1", [req.params.phone]);
    if (user[0] === "") return res.status(200).send({ "message": "there is no user yet" });
    return res.status(200).send(user[0][0]);
});

module.exports = route;