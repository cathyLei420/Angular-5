import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {

  authCheck = new Subject<any>();

  constructor(private _auth: AngularFireAuth, private _router: Router, private _ngzone: NgZone) {
    //want to check the user login state
    this._auth.authState.subscribe((data) => {
      console.log(data);
    })
   }

  loginwithgoogle(){
    //call firebase api
    //use popup, return a promise
    this._ngzone.runOutsideAngular(() => {
      this._auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((data) => {
        this.authCheck.next(data);
        this._ngzone.run(() => {
          this._router.navigate(['/home']);
        });
      });
    });
  }

  logout(){
    this._auth.auth.signOut().then(() => {
      this._router.navigate(['/login']);
    });
  }

  
  loginwithemail(user_details){
    //for the registration not login, when create, will create a new user in firebase
    this._auth.auth.createUserWithEmailAndPassword(user_details.email, user_details.password)
    .then((data) => {
      console.log(data);
    });
    //for signin, return promise
    //this._auth.auth.signInWithEmailAndPassword();
  }
}
