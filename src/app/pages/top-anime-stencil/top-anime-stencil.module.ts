import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopAnimeStencilPageRoutingModule } from './top-anime-stencil-routing.module';

import { TopAnimeStencilPage } from './top-anime-stencil.page';
import {SignInPageModule} from '../sign-in/sign-in.module';

import 'ulq-components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TopAnimeStencilPageRoutingModule,
        SignInPageModule
    ],
    declarations: [TopAnimeStencilPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TopAnimeStencilPageModule {}
