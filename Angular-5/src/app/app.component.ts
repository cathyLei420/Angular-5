import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  info :any;
  users: any;
  user_snapshot: any;
  user_observables: any;
  constructor(db: AngularFireDatabase) {
    //valuechange: if change in database, without refresh, it will update in the view
    //snapshotchanges will return more information
    db.object('username').valueChanges().subscribe((data) => {this.info = data;});
    // db.list('users').push({
    //   "username":'user1',
    //   "location":'loc1',
    //   "phone":"123",
    //   "company":"linkedin"
    // })
    db.list('users').valueChanges().subscribe((data) =>{this.users = data});
    db.list('users').snapshotChanges().subscribe((data) =>{this.user_snapshot = data});
    this.user_observables =  db.list('users').valueChanges();
  }
}
