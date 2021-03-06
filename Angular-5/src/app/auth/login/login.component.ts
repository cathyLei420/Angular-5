import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: any = {};
  constructor(private _authservice: AuthService) { }

  ngOnInit() {
  }

  loginwithgoogle(){
    this._authservice.loginwithgoogle();
  }
  loginwithemail(){
    // console.log(this.auth);
    this._authservice.loginwithemail(this.auth);
  }
}
