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

  onFocus(event: FocusEvent) {
    this.formService.inFocus.set(true);

    setTimeout(() => {
      const input = event.target as HTMLElement;

      const top = input.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }, 300);
  }

  onBlur() {
    this.formService.inFocus.set(false);
  }
 }
