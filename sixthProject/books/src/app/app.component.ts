import { Component } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= "Books About Banking";

  books: Book[] = [];
  constructor(private bookservice: BookService) {}
 
  ngOnInit() {
      const booksObservable = this.bookservice.getBooks();
      booksObservable.subscribe((booksData: Book[]) => {
          this.books = booksData;
      });
  }
}
