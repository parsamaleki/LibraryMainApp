import { Component, inject, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  status: 'available' | 'borrowed';
  borrower?: string | null;
}

const BOOK_DATA: Book[] = [
  { id: 1, title: 'شاهکارهای ادبیات فارسی', author: 'حافظ', year: 1397, status: 'available' },
  { id: 2, title: 'مبانی برنامه‌نویسی', author: 'علی رضایی', year: 1400, status: 'borrowed', borrower: 'مجتبی' },
  { id: 3, title: 'تاریخ جهان', author: 'م. احمدی', year: 1390, status: 'available' },
  { id: 4, title: 'علوم کامپیوتر پایه', author: 'نظامی پور', year: 1399, status: 'available' },
  { id: 5, title: 'سیر و سفر', author: 'سارا حسینی', year: 1401, status: 'borrowed', borrower: 'زهرا' },
  { id: 6, title: 'نقد و بررسی هنر', author: 'ک. مرادی', year: 1385, status: 'available' },
  { id: 7, title: 'مجموعه داستان کوتاه', author: 'مهدی یوسفی', year: 1396, status: 'available' },
  { id: 8, title: 'کتابدار حرفه‌ای', author: 'فرهاد نجفی', year: 1398, status: 'borrowed', borrower: 'علی' },
  { id: 9, title: 'هوش مصنوعی مقدماتی', author: 'زهرا کاظمی', year: 1402, status: 'available' },
  { id: 10, title: 'راهنمای پژوهش', author: 'دکتر نوری', year: 1388, status: 'available' }
];

@Component({
  selector: 'app-navigation-template',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './navigation-template.component.html',
  styleUrls: ['./navigation-template.component.scss']
})
export class NavigationTemplateComponent implements AfterViewInit {
  private bp = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.bp.observe(Breakpoints.Handset)
    .pipe(map(r => r.matches), shareReplay({ bufferSize: 1, refCount: true }));


  displayedColumns: string[] = ['id', 'title', 'author', 'year', 'status', 'borrower'];
  dataSource = new MatTableDataSource<Book>(BOOK_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  toggle(drawer: MatSidenav) { drawer.toggle(); }
  openFromAside(drawer: MatSidenav) { drawer.open(); }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}