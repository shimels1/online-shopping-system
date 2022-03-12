import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { CartService } from '../service/cart.service';
import { Item } from '../Model/item';
import { OrderService } from '../service/order.service';
import { Order } from '../Model/order';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private itemService: ItemService,
     private authService: AuthService ,
     private cartService: CartService,
      private orderService: OrderService) { }

  item: Item[] = [];
  itemID: Number[] = [];
  itemQuantity: number[] = [];
  itemTotalPrice = 0;

  order: Order[] = [];

  i = 0;


k = 0;

kk = 0;
  async ngOnInit() {
    this.getData();
  }

 async  getData() {
    await this.orderService.getOrder(this.authService.getUserId()).subscribe(res=>{
      this.order = res['result'];
      console.log(res['result'])
    });
  }

  async cancelOrder(id) {
    await this.orderService.deleteOrder(id).subscribe(res => {
      this.getData();
    }, error => console.log("deletion error ", error));
  }

}
