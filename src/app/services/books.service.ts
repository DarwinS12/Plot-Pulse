import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '@interfaces/books.interface';
import { Store } from '@ngrx/store';
import { getBooks } from '@store/actions/books.actions';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  #apirUrl = 'assets/books.json';

  #http = inject(HttpClient);

  constructor() {}

  getBooks(): Observable<Book[]> {
    return this.#http.get<Book[]>(this.#apirUrl);
  }
}
