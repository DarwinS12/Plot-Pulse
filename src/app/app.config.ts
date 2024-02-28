import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { booksReducer } from '@store/reducers/books.reducers';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from '@store/effects/books.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      StoreModule.forRoot({
        readingListBooks: booksReducer,
        ListBooks: booksReducer,
      }),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
      }),
      EffectsModule.forRoot([BooksEffects])
    ),
  ],
};
