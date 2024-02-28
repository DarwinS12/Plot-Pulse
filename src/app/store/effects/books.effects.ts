import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap } from 'rxjs';
import { BooksService } from '@services/books.service';
import * as BooksActions from '@store/actions/books.actions';
import { Book } from '@interfaces/books.interface';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private booksService$: BooksService) {}

  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.getBooks), //filtrar para que solo pasen las acciones del tipo getBooks, el effect solo se activa con el tipo getBooks
      exhaustMap(() =>
        //para mapear cada accion sin que se superpongan o sin que haya acabado la primera
        this.booksService$
          .getBooks()
          .pipe(map((books: Book[]) => BooksActions.getBooks({ books })))
      )
    )
  );
}
