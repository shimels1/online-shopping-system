import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Staff } from '../Model/staff';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/api/user';
  constructor(private _http: HttpClient) { }


  getUser(phone) {
    return this._http.get<User>(this.url + '/getuser/' + phone);
  }
  addUser(data) {
    return this._http.post(this.url + '/signup', data);
  }
  addCleark(data) {
    return this._http.post(this.url + '/addClerk', data);
  }


}
