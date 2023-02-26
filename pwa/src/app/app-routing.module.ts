import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { environment } from 'src/environments/environment';

import { Error404Component } from './_services/utils/components/error404/error404.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: "reload",
  scrollOffset: [0, 64]
};

const name = environment.application.name;

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module')
      .then(module => module.PublicModule)
  }, 
  { path: '404', component: Error404Component,
    data: {
      ogTitle: `Page d'erreur de l\'application ${name}`
    }, 
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
