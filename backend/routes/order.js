const express = require('express');
const db = require("../startup/mysqlconnection");
const route = express.Router();

// add order 
route.post('/add/', async(req, res) => {
    const address = req.body.address;
    const phone = req.body.phone;
    const id = req.body.id;
    const date = new Date();
    const sqlStatment ="INSERT INTO `ds`.`order` (`address`, `phone`, `date`, `customerId`) VALUES " +
        `(?,?,?,?)`;
    const result = await db.execute(sqlStatment, [address, phone, date,id]);
    return res.status(200).send({"id": result[0].insertId});
});

// add order items
route.post('/addOrderItem/', async(req, res) => {
    const orderId = req.body.orderId;
    const itemId = req.body.itemId;
    quantity = req.body.quantity;

    for(i = 0; i < itemId.length; i++){
        const sqlStatment =
        "INSERT INTO `ds`.`orderitem` (`orderID`, `itemId`, `quantity`)  VALUES " +
        `(?,?,?)`;
        if(itemId[i]!=',')  ress = await db.execute(sqlStatment, [orderId, itemId[i], quantity[i]]);
    }
    return res.status(200).send({"result": req.body});
});

// get user order by customer id
route.get('/getOrderByCustomerId/:id', async(req, res) => {
    let order = await db.execute(`SELECT * FROM ds.order where customerId=? `, [req.params.id]);
    date=[];
    itemCount=[];
    orderID=[];
    orderR=[];
    for(i = 0; i < order[0].length; i++){
        date.push(order[0][i].date);
        orderID.push(order[0][i].idorder);

        let item = await db.execute(`SELECT SUM(quantity) AS item FROM orderItem 
            where orderID=?`, [order[0][i].idorder]);
        itemCount.push(item[0][0]['item']);
        orderR.push({
            'date': order[0][i].date,
            'item': item[0][0]['item'],
            'orderID': order[0][i].idorder,
            'respond': order[0][i].respond
        });
    }
    return res.status(200).send({"result": orderR});
});

// get user order by orderid
route.get('/getOrderByUserId/:id', async(req, res) => {
    let order = await db.execute(`SELECT * FROM ds.order where idorder=? `, [req.params.id]);
   
    if(order[0][0]!=null) return res.status(200).send({"result": order[0][0]});
    return res.status(404).send({"result":"null"});
});

// get accepted orders
route.get('/getAcceptedOrders', async(req, res) => {
    let order = await db.execute(`SELECT * FROM ds.order where respond='true'  `);
    date=[];
    itemCount=[];
    orderID=[];
    orderR=[];
    for(i = 0; i<order[0].length; i++){
        date.push(order[0][i].date);
        orderID.push(order[0][i].idorder);

        let item = await db.execute(`SELECT SUM(quantity) AS item FROM orderItem 
            where orderID=?`, [order[0][i].idorder]);
        itemCount.push(item[0][0]['item']);
        orderR.push({
            'date': order[0][i].date,
            'respond': order[0][i].respond,
            'item': item[0][0]['item'],
            'orderID': order[0][i].idorder,
            'customerId': order[0][i].customerId
        });
    }
    return res.status(200).send({"result": orderR});
});

// get panding orders
route.get('/getPandingOrders', async(req, res) => {
    let order = await db.execute(`SELECT * FROM ds.order where respond='false'  `);
    date=[];
    itemCount=[];
    orderID=[];
    orderR=[];
    for(i = 0; i<order[0].length; i++){
        date.push(order[0][i].date);
        orderID.push(order[0][i].idorder);

        let item = await db.execute(`SELECT SUM(quantity) AS item FROM orderItem 
            where orderID=?`, [order[0][i].idorder]);
        itemCount.push(item[0][0]['item']);
        orderR.push({
            'date': order[0][i].date,
            'respond': order[0][i].respond,
            'item': item[0][0]['item'],
            'orderID': order[0][i].idorder,
            'customerId': order[0][i].customerId
        });
    }
    return res.status(200).send({"result": orderR});
});


// get user order
route.get('/getOrderDetail/:id', async(req, res) => {
    let itemf = await db.execute(`SELECT * FROM ds.orderitem where orderID=? `, [req.params.id]);
    itemRes=[];
    for(i = 0; i<itemf[0].length; i++){
        let item = await db.execute(`SELECT * FROM ds.item where iditem=? `, [itemf[0][i].itemId]);
        itemRes.push({
                'title': item[0][0].title,
                'price': item[0][0]['price'],
                'quantity': itemf[0][i].quantity
            });
    }
    return res.status(200).send({"result": itemRes});
});

//////////// delete order
route.delete('/delete/:id', async(req, res) => {
    const order = await db.execute(`delete from ds.order where idorder=? limit 1`, [req.params.id]);
    if (order[0] == "") return res.send(404,{ "message": "order is not found" });

    await db.execute(`delete from orderitem where orderID=? LIMIT 1`, [req.params.id]);
    return res.send({ "message": "order delete success" });
});

////////accept order
route.put("/acceptOrder/:id", async(req, res) => {
    const order = await db.execute("select * from ds.order where idorder=? ", [req.params.id]);
    if (order[0] == "") return res.status(404).send({ "message": "there is no order in this id" });
    const off = await db.execute("update ds.order set respond='true' where idorder=? LIMIT 1", [req.params.id]);
    return res.status(200).send({ "message": "request accepted success" });
});


module.exports = route;