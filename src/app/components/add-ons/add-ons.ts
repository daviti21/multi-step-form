import { Component, inject } from '@angular/core';
 import { FormService } from '../../form.service';

@Component({
  imports: [ ],
  selector: 'app-add-ons',
  styleUrl: './add-ons.css',
  templateUrl: './add-ons.html',
})
export class AddOns {
  formService = inject(FormService);
}
