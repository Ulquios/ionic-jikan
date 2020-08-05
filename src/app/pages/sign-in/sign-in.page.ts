import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
      private menu: MenuController,
      private router: Router
  ) { }

  ngOnInit() {
  }

  async signIn() {
    await this.router.navigate(['/top-anime'])
  }
}
