import { Component, inject } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  imports: [ ],
  selector: 'app-select-plan',
  styleUrl: './select-plan.css',
  templateUrl: './select-plan.html',
  standalone: true,
})
export class SelectPlan {
  changeMonthly() {
    this.formService.monthly.update(v => !v)
  }
  formService = inject(FormService);
}
