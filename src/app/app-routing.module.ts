import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'top-anime',
    loadChildren: () => import('./pages/top-anime/top-anime.module').then( m => m.TopAnimePageModule)
  },
  {
    path: 'top-anime-stencil',
    loadChildren: () => import('./pages/top-anime-stencil/top-anime-stencil.module').then( m => m.TopAnimeStencilPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
