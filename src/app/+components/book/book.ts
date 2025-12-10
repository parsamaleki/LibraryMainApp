import { Component, inject } from '@angular/core';
import { Grid } from '../grid/grid';
import { BookModel } from './book.model';
import { BooksService } from './books-service';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [Grid],
  templateUrl: './book.html',
  styleUrl: './book.scss'
})
export class Book {

  booksService = inject(BooksService)
  books: BookModel[] = this.booksService.list();

  deleteBook(book: BookModel) {
    if (confirm(`آیا از حذف کتاب «${book.title}» مطمئن هستید؟`)) {
      this.books = this.books.filter(b => b !== book);
    }
  }

  editBook(book: BookModel) {
    alert('ویرایش: ' + book.title);
  }
}

