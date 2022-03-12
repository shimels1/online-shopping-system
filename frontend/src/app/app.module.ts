import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


import {
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule ,
  MatButtonModule,
  MatInputModule
  ,MatFormFieldModule,
  MatSnackBarModule,
  MatTableModule,
   MatCard, MatCardMdImage, MatCardModule, MatNavList, MatListModule} from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ItemCardComponent } from './item-card/item-card.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AddClearkComponent } from './add-cleark/add-cleark.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerRequestDetailComponent } from './customer-request-detail/customer-request-detail.component';
import { CustomerAcceptedOrdersComponent } from './customer-accepted-orders/customer-accepted-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ItemCardComponent,
    SignupComponent,
    LoginComponent,
    ItemDetailComponent,
    CartComponent,
    OrderComponent,
    CheckoutComponent,
    OrderDetailComponent,
    AddClearkComponent,
    CustomerOrderComponent,
    CustomerRequestDetailComponent,
    CustomerAcceptedOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule, MatSidenavModule,
    MatMenuModule,MatListModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
