import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error$: String = '';

  constructor(private customerAuth : AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const uploadData = {'phone': form.value.phone, 'password': form.value.password}

    this.customerAuth.loginCustomer(uploadData).subscribe(res => {
    }, error=>{
      this.error$ = 'User name or password is not correct.';
    });
  }
}
