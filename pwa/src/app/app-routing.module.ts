import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './_services/utils/components/error404/error404.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module')
      .then(module => module.PublicModule)
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
