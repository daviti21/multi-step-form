import { Component, computed, inject, signal } from '@angular/core';
import { FormService } from '../../form.service';
import { Router, RouterLink } from '@angular/router';
 @Component({
  imports: [
    RouterLink,
   ],
  selector: 'app-navigation-buttons',
  styleUrl: './navigation-buttons.css',
  templateUrl: './navigation-buttons.html',
})
export class NavigationButtons {
  formService = inject(FormService);
  router = inject(Router);
   nextStep(){
     this.router.navigate([this.formService.pages[this.formService.currentStep() + 1].path])
     this.formService.currentStep.update(num => num + 1)
   };

   prevStep(){
     this.router.navigate( [this.formService.pages[this.formService.currentStep() - 1].path])
     this.formService.currentStep.update(num => num - 1)
   }

   isStepValid = computed(() => {
     switch ( this.formService.currentStep()) {
       case 0:
         return this.formService.isFormValid();
        case 1:
         return  this.formService.selectedPlan() !== null;

       case 2:
         return true;

       case 3:
         return true;

       default:
         return true;

     }
   });

   protected readonly window = window;
}
