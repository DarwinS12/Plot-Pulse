import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '@interfaces/books.interface';
import { removeFromReadingList } from '@store/actions/books.actions';
import { ButtonComponent } from '@components/Button/Button.component';

@Component({
  selector: 'app-books-readed-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './BooksReadedModal.component.html',
})
export class BooksReadedModalComponent {
  books$!: Book[];

  constructor(
    private store: Store<{ readingListBooks: { readingListBooks: Book[] } }>
  ) {
    store
      .select('readingListBooks')
      .subscribe((booksState: { readingListBooks: Book[] }) => {
        this.books$ = booksState.readingListBooks;
      });
  }

  deleteBookFromReadingList(isbn: string) {
    this.store.dispatch(removeFromReadingList({ isbn }));
  }
}
