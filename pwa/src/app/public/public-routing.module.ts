import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

import { HomeComponent } from './home/home.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectComponent } from './project/project.component';

const name = environment.application.name;

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full',
    data: {
      ogTitle: `Page d'accueil de l\'application ${name}`
    }, 
  },
  { path: 'club', component: WorkshopComponent,
    data: {
      ogTitle: `Page club de l\'application ${name}`
    }, 
  },
    { path: 'stage', component: InternshipComponent,
    data: {
      ogTitle: `Page stage de l\'application ${name}`
    }, 
  },
    { path: 'projet', component: ProjectComponent,
    data: {
      ogTitle: `Page projet de l\'application ${name}`
    }, 
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
