import { Injectable, signal, inject } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() {
     this.form.statusChanges.subscribe( () => {
this.isValid.set(this.form.valid)
     })
    this.router.events.subscribe(() => {
      this.currentPath.set(this.router.url);
      if (this.router.url === '/thank-you') {
        this.showNavigation.set(false)
      }else{
        this.showNavigation.set(true)
      }
      if(this.router.url === '/summary'){
        this.hideComplete.set(true)
      }else{
        this.hideComplete.set(false)
      }
    })
  }
  router = inject(Router);
  route = inject(ActivatedRoute);
   showNavigation = signal(true)
  currentStep = signal(0);
    currentPath = signal('');
    hideComplete = signal(false);
    isValid = signal(false);
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
    this.monthly.update(v => !v)
  }



  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?:\+995\s?)?5\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/)
    ])
  })
  }

