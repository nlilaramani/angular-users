import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() userUpdated:EventEmitter<User>=new EventEmitter();
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

  onSubmit(data:any):boolean{
    let name:string=data["name"];
    let email:string=data["email"];
    if(!name || name.length<=3 || !email || email.length<=3){
      return false;
    }
    console.log("On submit",data);
    let user=new User(0,data['name'],data['email']);
    this.userService.addUserHttp(user)
    .subscribe(response=>{
      this.userUpdated.emit(user);
    })
    this.email="";
    this.name="";
    return true;
  }
  validate(f:FormGroup):boolean{
    if(f.invalid && f.dirty)
      return false;
    else
      return true;
  }
   
}

function nameValidator(control:FormControl): { [s:string] : boolean } {
  if(!control.value.match(/^[a-zA-Z]+$/)){
    console.log("Name is invalid");
    return {inValidName: true};
  }
  return {};
}