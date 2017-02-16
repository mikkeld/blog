import {Component, OnInit, Input} from '@angular/core';
import {Project} from "../shared/project";

@Component({
  selector: 'project-group',
  templateUrl: './project-group.component.html',
  styleUrls: ['./project-group.component.css']
})
export class ProjectGroupComponent implements OnInit, Input {
  @Input() projects: Project[];

  constructor() { }

  ngOnInit() {
  }

}
