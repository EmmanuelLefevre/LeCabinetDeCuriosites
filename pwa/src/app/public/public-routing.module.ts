import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'club', component: WorkshopComponent },
  { path: 'stage', component: InternshipComponent },
  { path: 'projet', component: ProjectComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
