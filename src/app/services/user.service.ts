import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Observable,map } from "rxjs";
@Injectable()
export class UserService{
    data!:object;
    constructor(private http:HttpClient){

    }
    getAllUsers():User[]{
        return [
            new User(1,"Narendra Lilaramani","nrlilarmani@hotmail.com",0),
            new User(2,"Robin Smith","rsmith@hotmail.com",0),
            new User(3,"Robert Illiffe","riilliffe@hotmail.com",0),
            new User(4,"Michelle Broker","mbroker@hotmail.com",0)
        ]
    }

    addUserHttp(user:User):void{
        var useradd={
            id:user.id,
            name:user.name,
            email:user.email
        };
        this.http.post('http://localhost:8090/users'
            , useradd
        ).subscribe(response=>{
            console.log("Post Response",response);
        })
        }
    

    getAllUsersHttp():Observable<User[]>{
        return this.http.get('http://localhost:8090/users')
            .pipe(
                map(response=> {
                    console.log("Rsponse from server:",response);
                    var items:Array<any>=(<any>response);
                    return items.map(item=>{
                        return new User(item.id,item.name,item.email);
                });
            }));
        }

        
    


}