import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  getBooks,
  removeFromReadingList,
} from '@store/actions/books.actions';
import { Book } from '@interfaces/books.interface';
import { ButtonComponent } from '@components/Button/Button.component';
import { FiltersComponent } from '@components/Filters/Filters.component';

@Component({
  selector: 'app-list-read-books',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ButtonComponent, FiltersComponent],
  templateUrl: './ListReadBooks.component.html',
})
export class ListReadBooksComponent {
  books$!: Book[];

  constructor(private store: Store<{ ListBooks: { ListBooks: Book[] } }>) {
    store.select('ListBooks').subscribe((booksState: { ListBooks: Book[] }) => {
      this.books$ = booksState.ListBooks;
    });
  }

  ngOnInit() {
    this.store.dispatch(getBooks({ books: this.books$ }));
  }

  addToReadingPending(bookToAdd: Book) {
    const book: Book = {
      book: {
        title: bookToAdd.book.title,
        cover: bookToAdd.book.cover,
        ISBN: bookToAdd.book.ISBN,
        isInReadingList: true,
      },
    };

    this.store.dispatch(addToReadingList({ book }));
  }

  deleteBookFromReadingList(isbn: string) {
    this.store.dispatch(removeFromReadingList({ isbn }));
  }
}
