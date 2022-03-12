import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Model/order';
import { OrderDetail } from '../Model/orderDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:3000/api/order/';

  constructor(private http: HttpClient) {}

  getOrder(id) {
    return this.http.get<Order[]>(this.url + 'getOrderByCustomerId/' + id, {});
  }

  getOrderByOrderID(id) {
    return this.http.get<Order[]>(this.url + 'getOrderByUserId/' + id, {});
  }
  getPandingOrders() {
    return this.http.get<Order[]>(this.url + 'getPandingOrders/', {});
  }
  getAcceptedOrders() {
    return this.http.get<Order[]>(this.url + 'getAcceptedOrders/', {});
  }

  getOrderDetail(id) {
    return this.http.get<OrderDetail[]>(this.url + 'getOrderDetail/' + id, {});
  }


  addOrder(data) {
    return this.http.post(this.url + 'add', data);
  }

  addOrderItems(data) {
    return this.http.post(this.url + 'addOrderItem', data);
  }

  acceptOrder(id: string) {
    return this.http.put(this.url + 'acceptOrder/' + id, {});
  }

  deleteOrder(id: string) {
    return this.http.delete(this.url + 'delete/' + id, {});
  }
}
