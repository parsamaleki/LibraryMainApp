import { Component, inject, signal } from '@angular/core';
import { Grid } from '../grid/grid';
import { BookModel } from './book.model';
import { BooksService } from './books-service';
import { BookDetails } from './book-details/book-details';
import { MatDialog } from '@angular/material/dialog';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [Grid, MatAnchor],
  templateUrl: './book.html',
  styleUrl: './book.scss'
})
export class Book {

  booksService = inject(BooksService)
  // books: BookModel[] = this.booksService.list();
  signalBooks = signal<BookModel[]>(this.booksService.list());
  readonly dialog = inject(MatDialog);


  deleteBook(book: BookModel) {
    if (confirm(`آیا از حذف کتاب «${book.title}» مطمئن هستید؟`)) {
      // this.books = this.books.filter(b => b !== book);
      this.signalBooks.update(value => value.filter(b => b.id !== book.id) )
    }
  }

  editBook(book: BookModel) {
    alert('ویرایش: ' + book.title);
  }


openDialog(): void {
    const dialogRef = this.dialog.open(BookDetails, {
      data: {},  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('دایالوگ بسته شد');
    });

dialogRef.componentInstance.onAdd.subscribe(newBook => {
      this.booksService.add(newBook); 
      this.signalBooks.update(value => [...value, newBook]);  
    });
  }
}

