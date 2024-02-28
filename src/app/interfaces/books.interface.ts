export interface Book {
  book: Books;
}

export interface Books {
  title: string;
  pages?: number;
  genre?: string;
  cover: string;
  synopsis?: string;
  year?: number;
  ISBN: string;
  author?: Author;
  isInReadingList?: boolean;
}

export interface Author {
  name: string;
  otherBooks: string[];
}
