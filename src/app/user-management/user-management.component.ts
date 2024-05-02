import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  userUpdated:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onUpdateUser(user:User){
    console.log("User updated",user);
    this.userUpdated=true;
  }

  onListRefresh(obj:any){
    console.log("List refreshed",obj);
    this.userUpdated=false;
  }
}
