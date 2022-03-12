import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { CartService } from '../service/cart.service';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private orderService: OrderService,
              private userAuthService: AuthService,
              private cartService: CartService,
              private router: Router) { }
  error$: String = '';
  itemQuantity: number[] = [];
  itemID: number[] = [];
  i: number;

  ngOnInit() {
  }
 async sendOrder(form: NgForm) {
    const uploadData = {
    'phone': form.value.phone,
    'address': form.value.address,
    'id': this.userAuthService.getUserId()};
    await this.orderService.addOrder(uploadData).subscribe(res => {
      this.addItems(res['id']);

    this.cartService.clearCart();
    });
  }

   addItems(id) {

    this.itemQuantity = this.cartService.getCartItemQuantity();
    this.itemID = this.cartService.getCartItemId();
    const item = {
      'orderId': id
    ,'itemId': this.itemID
    ,'quantity': this.itemQuantity }
    this.orderService.addOrderItems(item).subscribe(res => {
      this.cartService.clearCart();
        this.router.navigate(['/order']);
      });
  }

}
