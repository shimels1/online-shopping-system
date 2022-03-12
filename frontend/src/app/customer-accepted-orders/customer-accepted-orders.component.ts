import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { UserService } from '../service/user.service';
import { Order } from '../Model/order';
import { Item } from '../Model/item';
import { User } from '../model/User';

@Component({
  selector: 'app-customer-accepted-orders',
  templateUrl: './customer-accepted-orders.component.html',
  styleUrls: ['./customer-accepted-orders.component.css']
})
export class CustomerAcceptedOrdersComponent implements OnInit {

  constructor(private orderServise: OrderService,
    private itemServise: OrderService, private userService: UserService) { }

        order: Order [] = [];
        item: Item [] = [];
        user: User [] = [];

        i = 0;

        ngOnInit() {
        this.getData();
        }
        async getData() {
        this.i = 0;
        await this.orderServise.getAcceptedOrders().subscribe(res => {
        this.order = res['result'];
        for (this.i = 0; this.i < this.order.length; this.i++ ) {
        this.userService.getUser(this.order[this.i].customerId).subscribe(res => {
        this.user.push(res)
        });
        }
        });
        }

        async acceptOrder(id){
        await this.orderServise.acceptOrder(id).subscribe(res=>{
        console.log("accept order ",res);
        this.getData();
        }, error => console.log("accepting  error ", error));
        }

        async cancelOrder(id){
        await this.orderServise.deleteOrder(id).subscribe(res => {
        console.log("delete order ",res);
        this.getData();
        }, error => console.log("deletion error ", error));
        }

        }
