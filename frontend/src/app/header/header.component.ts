import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService,
     public cartServic : CartService) { }

  ngOnInit() {
  }

  logout(){
    this.cartServic.clearCart();
    this.authService.logout();
  }
  count(){
    this.cartServic.countCart();
  }
}
