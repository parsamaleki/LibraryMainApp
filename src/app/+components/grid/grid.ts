import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {

  @Input() data: any[] = [];  
  @Input() columns: string[] = [];
  @Input() showActions = true;

  @Output() onEdit = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();

  get displayedColumns(): string[] {
    return [...this.columns, 'actions', 'expand'];
  }

  toggle(row: any) {
    row.isExpanded = !row.isExpanded;
  }

  isExpanded(row: any): boolean {
    return !!row.isExpanded;
  }

  edit(row: any) {
    this.onEdit.emit(row);
  }

  remove(row: any) {
    this.onRemove.emit(row);
  }
}