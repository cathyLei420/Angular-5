import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  toggle = true;
  constructor(private _authservice: AuthService) { }

  ngOnInit() {
    this._authservice.authCheck.subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.toggle = false;
      }
    });
  }

  logout() {
    this._authservice.logout();
  }


}
