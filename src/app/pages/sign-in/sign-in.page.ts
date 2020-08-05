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
    this.disableMenu();
  }

  async disableMenu() {
    await this.menu.enable(false);
  }

  async signIn() {
    await this.menu.enable(true)
    await this.router.navigate(['/top-anime'])
  }
}
