import { createAction, props } from '@ngrx/store';
import { type Book } from '@interfaces/books.interface';

export const getBooks = createAction(
  '[Books] Get books list',
  props<{ books: Book[] }>()
);

export const addToReadingList = createAction(
  '[Books] Add to reading list',
  props<{ book: Book }>()
);

export const removeFromReadingList = createAction(
  '[Books] Remove from reading list',
  props<{ isbn: string }>()
);

export const searchBook = createAction(
  '[Books] Search Book on book list',
  props<{ title: string }>()
);

export const filterByPages = createAction(
  '[Books] Filter by minimum pages',
  props<{ pages: number }>()
);
