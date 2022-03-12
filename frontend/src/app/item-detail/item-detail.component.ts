import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../Model/item';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item : Item={};
  id: string;
  itemCounter: number = 0;
  isItemSelected: boolean = false;
  constructor(private itemService : ItemService,
              private activatedRouter : ActivatedRoute,
              private cartService: CartService, public authServise: AuthService) {

  }

  ngOnInit() {
    this.activatedRouter.queryParamMap.subscribe(param => {
      this.id = param['params'].id;

      // check if the item is selected befor
      const token = localStorage.getItem(this.id);
      if (token) {
      this.isItemSelected=true;
      this.num  = parseInt(token);
      this.itemCounter = this.num;
    }
      else this.isItemSelected = false;
    // end

      this.itemService.getOne(param['params'].id).subscribe(item => {
        this.item= item;
      });

    });
  }

  addToCart(){
        localStorage.setItem(this.id , '1');
        this.checkIsItemSelected();
        this.cartService.countCart();
  }

  num : number;
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
