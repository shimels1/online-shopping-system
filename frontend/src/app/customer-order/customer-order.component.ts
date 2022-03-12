import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../Model/orderDetail';
import { Item } from '../Model/item';
import { OrderService } from '../service/order.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/User';
import { Order } from '../Model/order';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
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
    await this.orderServise.getPandingOrders().subscribe(res => {
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
