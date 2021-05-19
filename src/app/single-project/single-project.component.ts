import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../services/projects.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  name: string ;
  description: string ;
  img: string;

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // @ts-ignore
    this.name = this.projectsService.getProjectById(+id).name;
    // @ts-ignore
    this.description= this.projectsService.getProjectById(+id).description;

    // @ts-ignore
    this.img= this.projectsService.getProjectById(+id).img;
  }

}
