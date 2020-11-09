import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  @ViewChild('formSignIn') formSignIn: ContentChild;
  passwordHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.formSignIn);
  }
}
