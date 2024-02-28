import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderInfoComponent } from '@components/HeaderInfo/HeaderInfo.component';
import { BooksReadedModalComponent } from '@components/BooksReadedModal/BooksReadedModal.component';
import { initFlowbite } from 'flowbite';
import { NgOptimizedImage } from '@angular/common';
import { ListReadBooksComponent } from '@components/ListReadBooks/ListReadBooks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderInfoComponent,
    BooksReadedModalComponent,
    NgOptimizedImage,
    ListReadBooksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PlotPulse';

  ngOnInit(): void {
    initFlowbite();
  }
}
