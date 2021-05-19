/* tslint:disable:typedef use-lifecycle-interface */
import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';

import 'aos/dist/aos.css';
import {ProjectsService} from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'associationBellon';


  ngAfterViewInit(): void{
    AOS.init();
  }

}
