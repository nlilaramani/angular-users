import { Component, OnInit, Input, HostBinding, Inject } from '@angular/core';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 



@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})



export class UserItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass="ui grid row active";
  @Input() user:User;
  constructor(public dialog:MatDialog) {
    this.user=new User(0,"","",0);
   }

  ngOnInit(): void {
  }

  ratingUp():boolean{
    this.user.rating+=1;
    return false;
  }
  ratingDown():boolean{
    this.user.rating-=1;
    return false;
  }

  deleteUser(id:number):boolean{
    console.log("Deleting a user");
    return false;
  }



  }
