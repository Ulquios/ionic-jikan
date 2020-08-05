import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import {LogoComponent} from "../../components/logo/logo.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInPageRoutingModule,
  ],
  exports: [
    LogoComponent
  ],
  declarations: [SignInPage, LogoComponent]
})
export class SignInPageModule {}
