import {Component, OnInit, Input} from '@angular/core';
import {Project} from "../shared/project";

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit, Input {

  @Input() project: Project;

  constructor() { }

  ngOnInit() {
  }

}
