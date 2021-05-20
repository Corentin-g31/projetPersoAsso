import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../model/project.model';
import {ProjectsService} from '../services/projects.service';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.scss']
})
export class AdminProjectsComponent implements OnInit {
  projects: Observable<Project[]>

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects()
  }

  onDeleteProject(project: Project) {
    console.log('onDeleteProject')
  }
}
