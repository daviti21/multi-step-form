import { Component,  signal, inject  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import { Sidebar } from './components/sidebar/sidebar';
import { NavigationButtons } from './components/navigation-buttons/navigation-buttons';
import { FormService } from './form.service';
  @Component({
  selector: 'app-root',
  imports: [
    Sidebar,
    NavigationButtons,
    RouterOutlet,
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
    formService = inject(FormService);
  protected readonly title = signal('multi-step-form');

  }
