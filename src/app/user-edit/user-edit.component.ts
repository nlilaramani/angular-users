import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  name:string;
  email:string;
  constructor(private userService:UserService) {
    /*this.userForm=fb.group({
      'name':['Robert Davis',Validators.compose([Validators.required,nameValidator])],
      'email':['rdavis@gmail.com',Validators.compose([Validators.required,nameValidator])],
    });*/
    this.name="";
    this.email="";
   }

  ngOnInit(): void {
  }

  onSubmit(data:any){
      console.log("On submit",data);
      this.userService.addUserHttp(
        new User(0,data['name'],data['email'])
      );
      this.email="";
      this.name="";
  }
 
}
function nameValidator(control:FormControl): { [s:string] : boolean } {
  if(!control.value.match(/^[a-zA-Z]+$/)){
    console.log("Name is invalid");
    return {inValidName: true};
  }
  return {};
}