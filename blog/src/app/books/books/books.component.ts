import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book'

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[]  = [
    {
      title: 'Zen & the Art of Motorcycle Maintenence',
      imageUrl: 'asd'
    },
    {
      title: 'Gmail and Google Photos Clone',
      imageUrl: 'asd'
    },
    {
      title: 'Gmail and Google Photos Clone',
      imageUrl: 'asd'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
