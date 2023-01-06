import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './home/home.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { InternshipComponent } from './internship/internship.component';


@NgModule({
  declarations: [
    HomeComponent,
    WorkshopComponent,
    InternshipComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FontAwesomeModule
  ]
})
export class PublicModule { }
