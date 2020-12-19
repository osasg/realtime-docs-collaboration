import { Component } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  user: any;
  welcomeMessage = 'DSC FPTU HCMC - Angular Boilerplate';

  constructor(private _auth: AngularFireAuth) {
    this._auth.authState.subscribe(user => {
      if (user)
        this.welcomeMessage = `Welcome ${user.displayName}!`;
      else
        this.welcomeMessage = 'DSC FPTU HCMC - Angular Boilerplate';
    });
  }
}
