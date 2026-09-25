import { Injectable, signal, inject, computed, input } from '@angular/core';
import {   Router  } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Plan} from './plan.interface';
import {AddOn} from './add-ons.interface';
 @Injectable({
  providedIn: 'root'
})
export class FormService {
   router = inject(Router);
   showNavigation = signal(true)
   currentStep = signal(0);
   currentPath = signal('');
   hideComplete = signal(false);
   isFormValid = signal(false);
   monthly = signal(false);
   selectedOns = signal<AddOn[]>([]);
   selectedPlan = signal<Plan | null>(null);
   inFocus = signal(false);
   constructor() {
    this.loadData()
    this.form.valueChanges.subscribe(() => {
      this.isFormValid.set(this.form.valid);
      this.saveData()
    });

    this.router.events.subscribe(() => {
      this.currentPath.set(this.router.url);

      if (this.router.url === '/your-info') {
        this.currentStep.set(0);
      } else if (this.router.url === '/select-plan') {
        this.currentStep.set(1);
      } else if (this.router.url === '/add-ons') {
        this.currentStep.set(2);
      } else if (this.router.url === '/summary') {
        this.currentStep.set(3);
      }

      if(this.router.url === '/thank-you') {
        this.reset()
      }

      this.showNavigation.set(this.router.url !== '/thank-you');

      this.hideComplete.set(this.router.url === '/summary');
    });


  }

   selectedPrice = computed(() => {
     const plan = this.selectedPlan();

     if (!plan) return 0;
     return this.monthly() ? plan.price.year : plan.price.month;
   });

  pages = [
    { number: 1, step: 'STEP 1', title: 'YOUR INFO', path: '/your-info' },
    { number: 2, step: 'STEP 2', title: 'SELECT PLAN', path: '/select-plan' },
    { number: 3, step: 'STEP 3', title: 'ADD-ONS', path: '/add-ons' },
    { number: 4, step: 'STEP 4', title: 'SUMMARY', path: '/summary' },

  ];

   plans = [
     {img: '/images/icon-arcade.svg', tit: 'Arcade', price: {month: 9, year: 90}},
     {img: '/images/icon-advanced.svg', tit: 'Advanced', price: {month: 12, year: 120}},
     {img: '/images/icon-pro.svg', tit: 'Pro', price: {month: 15, year: 150}}
   ]

   addons: AddOn[] = [
     {   name: 'Online service', description: 'Access to multiplayer games', price: { month: 1, year: 10 }, id: 1},
     {  name: 'Larger storage', description: 'Extra 1TB of cloud save', price: { month: 2, year: 20 }, id: 2 },
     {   name: 'Customizable Profile', description: 'Custom theme on your profile', price: { month: 2, year: 20 }, id: 3}

   ]

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

   reset() {
     this.form.reset();
     this.selectedPlan.set(null);
     this.selectedOns.set([]);
     this.monthly.set(false);
     this.currentStep.set(0);

     sessionStorage.clear()
   }

   saveData() {
     const data = {
       form: this.form.value,
       selectedOns: this.selectedOns(),
       selectedPlan: this.selectedPlan(),
       monthly: this.monthly(),
     }
     sessionStorage.setItem('fullInfo', JSON.stringify(data))
   }

   loadData() {
     const saved = sessionStorage.getItem('fullInfo');
     if (!saved) return

     const data = JSON.parse(saved);
     this.form.patchValue(data.form);
      this.monthly.set(data.monthly ?? false);
     this.isFormValid.set(this.form.valid);

     const o = this.addons.filter(o => o.id !== data.id);
   this.selectedOns.set(o);

     const p = this.plans.find(plan => plan.tit === data.selectedPlan?.tit);
     this.selectedPlan.set(p ?? null);
   }




}

