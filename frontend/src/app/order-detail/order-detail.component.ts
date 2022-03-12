import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDetail } from '../Model/orderDetail';
import { Item } from '../Model/item';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order : OrderDetail [] = [];
  item : Item [] = [];
  constructor(private orderServise: OrderService, private activatedRout: ActivatedRoute,
              private itemServise: OrderService) { }

  ngOnInit() {
    this.activatedRout.queryParamMap.subscribe(param => {
      param['params'].id;

      this.orderServise.getOrderDetail(param['params'].id).subscribe(res=>{
        this.order = res['result'];
          console.log(res['result'])
      });



    });
  }

}
