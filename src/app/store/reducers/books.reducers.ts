import { createReducer, on } from '@ngrx/store';
import {
  addToReadingList,
  getBooks,
  removeFromReadingList,
  searchBook,
  filterByPages,
} from '@store/actions/books.actions';
import { type Book } from '@interfaces/books.interface';

export interface readingListInterface {
  readingListBooks: Book[];
  ListBooks: Book[];
  bookToFilter: Book[];
}

export const readingList: readingListInterface = {
  readingListBooks: [],
  ListBooks: [],
  bookToFilter: [],
};

export const booksReducer = createReducer(
  readingList,

  on(getBooks, (state, { books }) => {
    const toAddIsInReadingList = books.map((bookObject) => {
      const book = bookObject.book;
      return {
        book: {
          ...book,
          isInReadingList: false,
        },
      };
    });

    return {
      ...state,
      ListBooks: [...state.ListBooks, ...toAddIsInReadingList],
      bookToFilter: [...state.ListBooks, ...toAddIsInReadingList],
    };
  }),

  on(addToReadingList, (state, { book }) => {
    const isBookInReadingList = state.readingListBooks.some(
      (b) => b.book.ISBN === book.book.ISBN
    );

    if (isBookInReadingList) {
      return state;
    }

    const updatedIsInReadListOfListBooks = state.ListBooks.map((bookToChange) =>
      bookToChange.book.ISBN === book.book.ISBN
        ? { book: { ...bookToChange.book, isInReadingList: true } }
        : bookToChange
    );

    return {
      ...state,
      readingListBooks: [...state.readingListBooks, { ...book }],
      ListBooks: updatedIsInReadListOfListBooks,
    };
  }),

  on(removeFromReadingList, (state, { isbn }) => {
    const updatedIsInReadListOfListBooks = state.ListBooks.map((bookToChange) =>
      bookToChange.book.ISBN === isbn
        ? { book: { ...bookToChange.book, isInReadingList: false } }
        : bookToChange
    );

    return {
      ...state,
      readingListBooks: state.readingListBooks.filter(
        (book) => book.book.ISBN !== isbn
      ),
      ListBooks: updatedIsInReadListOfListBooks,
    };
  }),

  on(searchBook, (state, { title }) => {
    if (title === null || title.length < 0) {
      return {
        ...state,
        ListBooks: [...state.ListBooks],
      };
    }
    const filteredBook = [...state.bookToFilter].filter((book) =>
      book.book.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
    );

    return {
      ...state,
      ListBooks: [...filteredBook],
    };
  }),

  on(filterByPages, (state, { pages }) => {
    if (pages === null || pages === 0) {
      return {
        ...state,
        ListBooks: [...state.ListBooks],
      };
    }
    const filteredBookByPages = [...state.bookToFilter].filter((book) => {
      if (book.book.pages !== undefined) {
        return book.book.pages >= pages;
      }
      return [];
    });

    return {
      ...state,
      ListBooks: [...filteredBookByPages],
    };
  })
);
