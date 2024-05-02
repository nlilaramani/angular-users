import { Component, OnInit,Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges {
  users?:User[];
  @Input() userUpdated:boolean=false;
  @Output() listRefreshed:EventEmitter<any>=new EventEmitter();
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    //this.users=this.userService.getAllUsers();
  }

  refresh():void{
    this.userService.getAllUsersHttp().subscribe(data=>{
      this.users=data;
      this.listRefreshed.emit("List refreshed");
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

}
