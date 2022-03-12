import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cleark',
  templateUrl: './add-cleark.component.html',
  styleUrls: ['./add-cleark.component.css']
})
export class AddClearkComponent implements OnInit {

  roles: Role[] = [
    { value: 'author', viewValue: 'Author' },
    { value: 'admin', viewValue: 'Admin' }
  ];
  error$: String = "";
  success$: String = "";
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  addUser(form: NgForm) {
    const formData = {
    "fname": form.value.fname
    ,"lname": form.value.lname
    ,"password": form.value.password
    ,"phone": form.value.phone
    ,"balance": '0'}

    this.userService.addCleark(formData).subscribe(res => {
      console.log(res)
      if (res["message"] == "true") {
        this.success$ = "User Added success.";
        this.error$ = "";
        form.resetForm();
      } else {
        this.error$ = res["message"];
        this.success$ = "";
      }
    });
  }
}
export interface Role {
  value: string;
  viewValue: string;
}
