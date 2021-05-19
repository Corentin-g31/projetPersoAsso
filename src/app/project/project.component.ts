import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() projectName: string;
  @Input() projectImg: string;
  @Input() indexProject: number;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
