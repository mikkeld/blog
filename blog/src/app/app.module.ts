import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ProjectsComponent} from "./projects/projects/projects.component";
import {ProjectGroupComponent} from "./projects/project-group/project-group.component";
import {ProjectItemComponent} from "./projects/project-item/project-item.component";
import { BooksComponent } from './books/books/books.component';
import { BooksGroupComponent } from './books/books-group/books-group.component';
import { BookItemComponent } from './books/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectGroupComponent,
    ProjectItemComponent,
    BooksComponent,
    BooksGroupComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
