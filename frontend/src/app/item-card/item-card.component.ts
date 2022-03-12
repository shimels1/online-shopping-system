import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Item } from '../Model/item';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

@Input() item : Item ;

id: string;
itemCounter: number = 0;
isItemSelected: boolean = false;

constructor(public authService: AuthService,
            private cartService: CartService,
            private itemService: ItemService) {
}

num: number =0;
 ngOnInit() {

  this.id = this.item.iditem;

      // check if the item is selected befor
  const token = localStorage.getItem(this.id);
  if (token) {
      this.isItemSelected=true;
      this.num  = parseInt(token);
      this.itemCounter = this.num;
    }
      else this.isItemSelected = false;
    // end

  this.itemService.getOne(this.id).subscribe(item => {
        this.item= item;
      });

  }


  addToCart(){
    localStorage.setItem(this.id , '1');
    this.checkIsItemSelected();
    this.cartService.countCart();
}

// num : number;
checkIsItemSelected(){
const token = localStorage.getItem(this.id);
if (token) {
  this.isItemSelected=true;
  this.num  = parseInt(localStorage.getItem(this.id));
  this.itemCounter = this.num;
  if(this.num<=0) {
    localStorage.removeItem(this.id);
    this.isItemSelected = false;
}
}}

increasCart(){
this.num  = parseInt(localStorage.getItem(this.id));
this.num=this.num+1;
localStorage.setItem(this.id , this.num+"");
this.itemCounter = this.num;
this.checkIsItemSelected();
this.cartService.countCart();
}

dicreasCart(){
this.num  = parseInt(localStorage.getItem(this.id));
this.num=this.num-1;
localStorage.setItem(this.id , this.num+"");
this.itemCounter = this.num;
this.checkIsItemSelected();
this.cartService.countCart();
}



}
