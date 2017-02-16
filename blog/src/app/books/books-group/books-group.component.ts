import {Component, OnInit, Input} from '@angular/core';
import { Book } from '../shared/book'

@Component({
  selector: 'books-group',
  templateUrl: './books-group.component.html',
  styleUrls: ['./books-group.component.css']
})
export class BooksGroupComponent implements OnInit, Input {

  @Input() books: Book[];

  constructor() { }

  ngOnInit() {
  }

}
