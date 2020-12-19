import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {trace} from '@angular/fire/performance';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor(private _auth: AngularFireAuth) {
    this._auth.authState.pipe(trace('auth')).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

  signOut(): void {
    this._auth.signOut();
  }

}
