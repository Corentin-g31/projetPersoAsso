import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectsService} from '../../services/projects.service';
import {Member} from '../../model/member.model';
import {Project} from '../../model/project.model';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  createProjectForm: FormGroup;
  project: Project
  text: string;

  constructor( private formBuilder: FormBuilder, private projectService: ProjectsService) { }

  ngOnInit(): void {

    this.initForm();
  }
  get name(): AbstractControl | null { return this.createProjectForm.get('name'); }
  get description(): AbstractControl | null { return this.createProjectForm.get('description'); }

  onAddProject() {
    this.project = this.createProjectForm.getRawValue();
    this.projectService.addProject(this.project)
      .subscribe(
        (data)=>{
          console.log(data)
        },
        (e)=>{
          console.log(e)
        },
        ()=>{
          console.log('completion')
        }
      )
  }

  private initForm() {
    this.createProjectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.maxLength(130)]],
    });
  }
}
