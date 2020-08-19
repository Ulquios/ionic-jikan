import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopAnimeStencilPage } from './top-anime-stencil.page';

const routes: Routes = [
  {
    path: '',
    component: TopAnimeStencilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopAnimeStencilPageRoutingModule {}
