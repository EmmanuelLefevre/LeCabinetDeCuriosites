import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

  name = environment.application.name;
  
  constructor() { }

  ngOnInit(): void {
  }

}
