import { Component, OnInit,Input } from '@angular/core';
import {UserCardModel} from "../../../core/models/user-card.model";
import {users} from '../../../data/users';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public userData: Array<UserCardModel>;
    constructor() {
        this.userData = users;
    }
    public pickedUsers:Array<UserCardModel> = [];
    public message: any = [];
    public results: any= [];
    private requestTimer = null;
    public search(value:string):void{
        if(this.requestTimer !== null){
            clearTimeout(this.requestTimer);
        }


        this.requestTimer = setTimeout(()=> {
            if (value.length === 0){
                this.results = [];
            } else {
                this.results = this.userData.filter((el)=>{
                    return el.name.toUpperCase().indexOf(value.toUpperCase()) > -1;
                });
                this.message = this.results;
            }
        }, 400);
    }
public chooseUser(user){
        if(user.desabled === false){
            this.pickedUsers.push(user);
        }
}
  ngOnInit() {
  }

}
