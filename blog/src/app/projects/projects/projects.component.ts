import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project'

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[]  = [
    {
      title: 'Project1',
      content: 'Content of project 1'
    },
    {
      title: 'Project2',
      content: 'Content of project 2'
    },
    {
      title: 'Project3',
      content: 'Content of project 3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
