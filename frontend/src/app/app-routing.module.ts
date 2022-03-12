import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AddClearkComponent } from './add-cleark/add-cleark.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerRequestDetailComponent } from './customer-request-detail/customer-request-detail.component';
import { CustomerAcceptedOrdersComponent } from './customer-accepted-orders/customer-accepted-orders.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'signup', component: SignupComponent
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'item/detail', component: ItemDetailComponent
  },{
    path: 'cart', component: CartComponent
  },{
    path: 'order', component: OrderComponent
  },{
    path: 'checkout', component: CheckoutComponent
  },{
    path: 'orderDetail', component: OrderDetailComponent
  },{
    path: 'adduser', component: AddClearkComponent
  },{
    path: 'customerOrder', component: CustomerOrderComponent
  },{
    path: 'requestDetail', component: CustomerRequestDetailComponent
  },{
    path: 'customerAcceptedOrder', component: CustomerAcceptedOrdersComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
