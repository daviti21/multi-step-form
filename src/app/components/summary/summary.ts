import { Component, computed, inject } from '@angular/core';
import { FormService } from '../../form.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-summary',
  styleUrl: './summary.css',
  templateUrl: './summary.html',
  standalone: true,
})
export class Summary {
  formService = inject(FormService);

  totalPrice(){
    const addOnPrice = this.formService.selectedOns().reduce((total, on) => {
      return total + (this.formService.monthly() ? on.price.year : on.price.month);
    }, 0);
    return addOnPrice + this.formService.selectedPrice();
}

   }
