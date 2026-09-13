import { Injectable, signal, inject } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
 @Injectable({
  providedIn: 'root'
})
export class FormService {
  router = inject(Router);
  route = inject(ActivatedRoute);
  currentStep = signal(0);
    currentPath = signal('');
   nextStep(){
    this.router.navigate([this.pages[this.currentStep() + 1].path])
    this.currentStep.update(num => num + 1)
  };

  prevStep(){
    this.router.navigate( [this.pages[this.currentStep() - 1].path])
    this.currentStep.update(num => num - 1)
     }


  pages = [
    { number: 1, step: 'STEP 1', title: 'YOUR INFO', path: '/your-info' },
    { number: 2, step: 'STEP 2', title: 'SELECT PLAN', path: '/select-plan' },
    { number: 3, step: 'STEP 3', title: 'ADD-ONS', path: '/add-ons' },
    { number: 4, step: 'STEP 4', title: 'SUMMARY', path: '/summary' },

  ];

  monthly = signal(false);
  changeMonthly() {
    this.monthly.update(v => v = !v)
  }

  constructor() {
    this.router.events.subscribe(() => {
      this.currentPath.set(this.router.url);

    })
  }
}
