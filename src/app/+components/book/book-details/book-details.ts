import { Component, inject, model, output } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookModel } from '../book.model';
@Component({
  selector: 'app-book-details',
  imports: [
    // MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatLabel,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    
],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss',
})
export class BookDetails {
  
  
  onAdd = output<BookModel>();
  
  book = model<BookModel>({
    id: 0,
    title: '',
    author: '',
    year: 0,
    isAvailable: false,
    borrower: '',
    symbol: '',
    description: ''
  });
  
  readonly dialogRef = inject(MatDialogRef<BookDetails>);
  
  addBook() {
    this.onAdd.emit(this.book());
    this.close();
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
