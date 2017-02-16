import {Component, OnInit, Input} from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit, Input {

  @Input() book: Book;

  getLink(): string {
    return `http://images.amazon.com/images/P/${this.book.isbn}.01.20TRZZZZ.jpg`;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
