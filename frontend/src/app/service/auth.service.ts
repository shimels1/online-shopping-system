import { Injectable, Inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Form, NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/api/auth/';

  constructor(private http: HttpClient,
    //  @Inject(LOCAL_STORAGE) private localStorage: any,
   private router: Router) {}

  loginCustomer(user) {
    // console.log(this.url + ' '+user.password)
    return this.http.post(this.url + 'customerLogin', user).pipe(map(res => {

      if (res && res['token']['phone']) {
        localStorage.removeItem('fname');
        localStorage.removeItem('lname');
        localStorage.removeItem('role');
        localStorage.removeItem('id');
        localStorage.setItem('fname', res['token']['fname']);
        localStorage.setItem('lname', res['token']['lname']);
        localStorage.setItem('id', res['token']['phone']);
        localStorage.setItem('role', res['token']['role']);
        this.router.navigate(['/']);
        return true;
      } else {
        return false;
      }
    }));
  }


  getUser() {
    const token = localStorage.getItem('id');
    if (!token) { return false; }
    // return  new JwtHelperService().decodeToken(token);
    return { "id": token,"fname": localStorage.getItem('fname'), "lname": localStorage.getItem('lname'), "role": localStorage.getItem('role')};
  }

  getUserId() {
    const token = localStorage.getItem('id');
    if (!token) { return false; }
    return token;
  }
  getUserRole() {
    const token = localStorage.getItem('role');
    if (!token) { return false; }
    return token;
  }
   getRole() {
    const token = localStorage.getItem('role');
    if (!token) { return "false"; }
    return token;
  }

  logout() {
    localStorage.removeItem('fname');
    localStorage.removeItem('id');
    localStorage.removeItem('lname');
    localStorage.removeItem('role');
  }

  isLogedIn() {
    const token = localStorage.getItem('id');
    if (!token) { return false; }
      return true;
  }



}
