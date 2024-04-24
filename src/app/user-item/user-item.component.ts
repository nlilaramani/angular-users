import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { User } from '../models/user.model';
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass="row";
  @Input() user:User;
  constructor() {
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

}
