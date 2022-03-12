import { Component, OnInit } from '@angular/core';
import { Item } from '../Model/item';
import { ItemService } from '../service/item.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { AuthService } from '../service/auth.service';
import { OrderService } from '../service/order.service';
import { OrderDetail } from '../Model/orderDetail';
import { Order } from '../Model/order';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-customer-request-detail',
  templateUrl: './customer-request-detail.component.html',
  styleUrls: ['./customer-request-detail.component.css']
})
export class CustomerRequestDetailComponent implements OnInit {
  orderDetail : OrderDetail [] = [];
  item : Item [] = [];
  order : Order ;
  user : User;

  constructor(private orderServise: OrderService, private activatedRout: ActivatedRoute,
              private itemServise: OrderService, private userService: UserService) { }

  ngOnInit() {
    this.activatedRout.queryParamMap.subscribe(param => {
      param['params'].id;

      this.orderServise.getOrderDetail(param['params'].id).subscribe(res=>{
        this.orderDetail = res['result'];
      });

      this.orderServise.getOrderByOrderID(param['params'].id).subscribe(res=>{
        this.order = res['result'];
        this.userService.getUser(this.order['customerId']).subscribe(res=>{
          this.user = res;
        });
      });

    });
  }

}
