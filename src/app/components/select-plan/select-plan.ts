import { Component, inject } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  imports: [ ],
  selector: 'app-select-plan',
  styleUrl: './select-plan.css',
  templateUrl: './select-plan.html',
})
export class SelectPlan {
  formService = inject(FormService);
}
