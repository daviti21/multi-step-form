import { Injectable, signal, inject, computed } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Plan} from './plan.interface'
@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() {
     this.form.statusChanges.subscribe( () => {
this.isFormValid.set(this.form.valid)
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

  isStepValid = computed(() => {
    switch (this.currentStep()) {
      case 0:
        return this.isFormValid();

      case 1:
        return  this.selectedPlan() !== null;

      case 2:
        return true;

      case 3:
        return true;

      default:
        return true;

    }
  });


  router = inject(Router);


   showNavigation = signal(true)
  currentStep = signal(0);
    currentPath = signal('');
    hideComplete = signal(false);
    isFormValid = signal(false);




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



  monthly = signal(false);
  changeMonthly() {
    this.monthly.update(v => !v)
  }


selectedPlan = signal<Plan | null>(null);
  plans = [
    {img: '/images/icon-arcade.svg', tit: 'Arcade', price: {month: 9, year: 90}},
    {img: '/images/icon-advanced.svg', tit: 'Advanced', price: {month: 12, year: 120}},
    {img: '/images/icon-pro.svg', tit: 'Pro', price: {month: 15, year: 150}}
  ]

  selectedPrice = computed(() => {
    const plan = this.selectedPlan();

    if (!plan) return 0;

    return this.monthly() ? plan.price.month : plan.price.year;
  });
}





