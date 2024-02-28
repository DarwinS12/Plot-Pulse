import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { searchBook, filterByPages } from '@store/actions/books.actions';
import { Store } from '@ngrx/store';
import { Book } from '@interfaces/books.interface';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Filters.component.html',
})
export class FiltersComponent {
  bookTitle = '';

  pagesNumber = 0;

  constructor(private store: Store<Book[]>) {}

  searchBook() {
    this.store.dispatch(searchBook({ title: this.bookTitle }));
  }

  filterBookByPages() {
    this.store.dispatch(filterByPages({ pages: this.pagesNumber }));
  }
}
