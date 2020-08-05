import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopAnimePageRoutingModule } from './top-anime-routing.module';

import { TopAnimePage } from './top-anime.page';
import {SignInPageModule} from "../sign-in/sign-in.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TopAnimePageRoutingModule,
        SignInPageModule
    ],
  declarations: [TopAnimePage]
})
export class TopAnimePageModule {}
