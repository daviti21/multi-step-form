import { Component, inject } from '@angular/core';
 import { FormService } from '../../form.service';
import { AddOn } from '../../add-ons.interface';

@Component({
  imports: [ ],
  selector: 'app-add-ons',
  styleUrl: './add-ons.css',
  templateUrl: './add-ons.html',
})
export class AddOns {
  formService = inject(FormService);

  toggleAddOn(addOn: AddOn) {
    this.formService.selectedOns.update(selected => {
      const exists = selected.some(on => on.id === addOn.id);
      if (exists) {
        return selected.filter(on => on.id !== addOn.id)
      }

      return [...selected, addOn]
    })}
}
