import { Injectable } from '@angular/core';
import { isString } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    this.item = [];
  }

  i = 0;
  public counter = 0;

  item: number [] = [];
  itemQuantity: number [] = [];

  dec = 0;

  countCart() {
    this.counter = 0;
    for ( this.i = 0; this.i < localStorage.length; this.i++) {
      if ( ! isNaN( parseInt(localStorage.key(this.i)) ) ) {
      this.counter += parseInt( localStorage.getItem(localStorage.key( this.i )));
    }
   }
    return this.counter;
  }
  getCartItemId() {
    this.dec = 0;
    for ( this.i = 0; this.i < localStorage.length; this.i++) {
      if ( ! isNaN( parseInt(localStorage.key(this.i)) ) ) {
        this.item[this.i - this.dec] = parseInt(localStorage.key( this.i ));
    } else {
      this.dec++;
    }
  }
    return this.item;
}
getCartItemQuantity() {
  this.dec = 0;
  for ( this.i = 0; this.i < localStorage.length; this.i++) {
      if ( ! isNaN( parseInt(localStorage.key(this.i)) ) ) {
        this.itemQuantity[this.i - this.dec] = parseInt( localStorage.getItem(localStorage.key( this.i)));
    } else {
      this.dec++;
    }
  }
  return this.itemQuantity;
}

clearCart() {
  this.dec = 0;
  for ( this.i = 0; this.i < localStorage.length; this.i++) {
    if ( ! isNaN( parseInt(localStorage.key(this.i)) ) ) {
      localStorage.removeItem(localStorage.key( this.i ));
  } else {
    this.dec++;
  }
}
}
}
