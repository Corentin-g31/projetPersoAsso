import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../services/projects.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  projects: any[];

  constructor(private projectService: ProjectsService) {
  }

  ngOnInit(): void {
    // this.projects = this.projectService.projects;
  }

}
