import { Component, inject, OnDestroy } from '@angular/core';
 import {Router, RouterLink } from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-thank-you',
  styleUrl: './thank-you.css',
  templateUrl: './thank-you.html',
  standalone: true,
})
export class ThankYou implements OnDestroy {
  router = inject(Router);
ngOnDestroy() {
  localStorage.removeItem('fullInfo')
}
  }
