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
import { Book } from "../../../../../+components/book/book";
// import { Book } from "../../../../../+components/book/book";
// 


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
    MatSortModule,
    Book
],
  templateUrl: './navigation-template.component.html',
  styleUrls: ['./navigation-template.component.scss']
})
export class NavigationTemplateComponent   {
  private bp = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.bp.observe(Breakpoints.Handset)
    .pipe(map(r => r.matches), shareReplay({ bufferSize: 1, refCount: true }));




  toggle(drawer: MatSidenav) { drawer.toggle(); }
  openFromAside(drawer: MatSidenav) { drawer.open(); }


}