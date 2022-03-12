import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../Model/item';
import { CartService } from '../service/cart.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.item=[];
    this.itemID= [];
    this.itemQuantity = [];
    this.itemTotalPrice = 0;
  }
  constructor(private itemService: ItemService, public cartService: CartService, private authService: AuthService) { }

  item: Item[] = [];
  itemID: Number[] = [];
  itemQuantity: number[] = [];
  itemTotalPrice = 0;

  i = 0;


k = 0;

kk = 0;
   ngOnInit() {
    this.getItem();
  }

  async getItem() {

    this.k = 0;
    this.itemQuantity = await this.cartService.getCartItemQuantity();
    this.itemID = this.cartService.getCartItemId();
    for ( this.i = 0; this.i < this.itemID.length; this.i++) {
      await this.itemService.getOne(this.itemID[this.i]).subscribe(item => {
       if (item.title !== undefined) { this.item.push(item); }
      });
      this.k = this.i;
      this.k++;
    }
  }
  removeItem(){
    this.item=[];
  }

  getTotalprice() {
    this.itemTotalPrice = 0;
    for (this.i = 0; this.i < this.item.length; this.i++) {
      this.kk = parseInt( this.item[this.i].price) * this.itemQuantity[this.i];
      this.itemTotalPrice = this.itemTotalPrice + this.kk ;
    }
  }


}
