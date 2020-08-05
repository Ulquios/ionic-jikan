import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import {LogoComponent} from "../../components/logo/logo.component";
import {HeaderComponent} from "../../components/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
  ],
  exports: [
    LogoComponent,
    HeaderComponent
  ],
    declarations: [SignInPage, LogoComponent, HeaderComponent]
})
export class SignInPageModule {}
