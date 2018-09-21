import { Component, OnInit, Input} from '@angular/core';
import {UserCardModel} from "../../../core/models/user-card.model";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
    @Input()
    public userInfo: UserCardModel;

    condition: boolean=true;
    public remove(){
        this.userInfo.desabled = true;
        this.condition=!this.condition;
        console.log(this.userInfo.desabled);
    }
    constructor() { }

  ngOnInit() {
  }

}
