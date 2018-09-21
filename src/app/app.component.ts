import { Component } from '@angular/core';
import {UserCardModel} from './core/models/user-card.model';
import {users} from './data/users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public userData: Array<UserCardModel>;

    constructor() {
        this.userData = users;
    }
}
