import { Component, inject } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  imports: [],
  selector: 'app-summary',
  styleUrl: './summary.css',
  templateUrl: './summary.html',
})
export class Summary {
  formService = inject(FormService);
}
