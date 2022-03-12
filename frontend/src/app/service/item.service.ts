import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../Model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'http://localhost:3000/api/item/';

  constructor(private http: HttpClient) {}

  getAllitems() {
    console.log(this.url+'getAll')
    return this.http.get<Item[]>(this.url + 'getAll');
  }


  getOne(id) {
    return this.http.get<Item>(this.url + 'getOne/' + id, {});
  }

}
