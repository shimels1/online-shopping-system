import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements  OnInit {

  error$: String = '';
  success$: String = '';
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  addUser(form: NgForm) {
    // console.log(form.value)
    const formData = {'fname': form.value.fname
                      ,'lname': form.value.lname
                      ,'password': form.value.password
                      ,'phone': form.value.phone
                      ,'balance': '0'}
    this.error$ = '';
    this.success$ = '';
    if(form.value.password === form.value.rpassword){
      this.userService.addUser(formData).subscribe(res => {
        if (res['message'] === 'true') {
          this.success$ = 'User Added success.';
          this.error$ = '';
          form.resetForm();
        } else {
          this.error$ = res['message'];
          this.success$ = '';
        }
      });
    }else{
      this.error$ = 'password does not match';
      this.success$ = '';
    }

  }
}
