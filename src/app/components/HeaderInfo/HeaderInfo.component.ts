import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header-info',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './HeaderInfo.component.html',
})
export class HeaderInfoComponent {}
