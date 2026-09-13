import { Component, inject, signal } from '@angular/core';
import { FormService } from '../../form.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-navigation-buttons',
  styleUrl: './navigation-buttons.css',
  templateUrl: './navigation-buttons.html',
})
export class NavigationButtons {
  formService = inject(FormService);
   protected readonly window = window;
}
