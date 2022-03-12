const express = require('express');
const db = require("../startup/mysqlconnection");
const route = express.Router();

// get all items
route.get('/getAll', async(req, res) => {
    const item = await db.execute(" SELECT * FROM `item`");
    return res.status(200).send(item[0]);
});

// get one item
route.get('/getOne/:id', async(req, res) => {
    const id = req.params.id;
    if (!id)
        return res.send({ "error": "item id is invalid." })
    const item = await db.execute(" SELECT * FROM `item` where iditem=? ", [id]);
    if (!item[0][0]) return res.send({ "error": "item is not found in the given id" })
    return res.status(200).send(item[0][0]);
});

// add item
route.post('/post/', async(req, res) => {
    const title = req.body.title;
    const catagory = req.body.catagory;
    const date = new Date();
    const discription = req.body.discription;
    const price = req.body.price;
    const rating = req.body.rating;
    const quantity= req.body.quantity;
    var image = "this is image url";
    const sqlStatment =
        "INSERT INTO `ds`.`item` (`title`, `catagory`, `price`, `discription`, `date`, `rating`, `quantity`, `imageURL`) VALUES " +
        `(?,?,?,?,?,?,?,?)`;
    await db.execute(sqlStatment, [title, catagory, price, discription, date, rating, quantity, image]);
    return res.status(200).send({ "message": "true" });
});

module.exports = route;
