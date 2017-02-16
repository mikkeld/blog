import {Component, OnInit, Input} from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit, Input {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
