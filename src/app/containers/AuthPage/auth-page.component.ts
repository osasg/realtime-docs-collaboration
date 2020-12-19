import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  @ViewChild('formSignIn') formSignIn: ContentChild;
  passwordHidden = true;

  constructor(
    private _auth: AngularFireAuth,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(e): void {
    e.preventDefault();
    console.log(this.formSignIn);
  }

  async signInWithGoogle(): Promise<any> {
    const user = await this._auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (user)
      this._router.navigate(['/']);
  }

  signOut(): void {
    this._auth.signOut();
  }
}
