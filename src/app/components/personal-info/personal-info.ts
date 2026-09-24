import { Component, inject } from '@angular/core';
import { FormService } from '../../form.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule ],
  selector: 'app-personal-info',
  styleUrl: './personal-info.css',
  templateUrl: './personal-info.html',
})
export class PersonalInfo {
  formService = inject(FormService);
  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }

scrollToInput(event: FocusEvent){
    const input = event.target as HTMLInputElement;
    input.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
}
 }
