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
      title: 'Gmail and Google Photos Clone',
      content: 'This app resembles the basic features of gmail. You can sign in, send an email to existing users and reply to threads. I also made a Google Photos clone where you can upload photos and create albums. The photos are automatically tagged using the Google Vision API',
      imageUrl: '../../../assets/images/inbox.png',
      stack: ['Angular2', 'Node', 'Express', 'Firebase', 'Google Cloud Storage', 'Google Vision API']
    },
    {
      title: 'Project2',
      content: 'Content of project 2',
      imageUrl: '../../../assets/images/inbox.png',
      stack: ['Angular2', 'Node', 'Express', 'Firebase', 'Google App Engine', 'Google Vision API']
    },
    {
      title: 'Project3',
      content: 'Content of project 3',
      imageUrl: '../../../assets/images/inbox.png',
      stack: ['Angular2', 'Node', 'Express', 'Firebase', 'Google App Engine', 'Google Vision API']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
