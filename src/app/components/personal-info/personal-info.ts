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
  test(event: Event) {
    console.log(
      'INPUT:',
      (event.target as HTMLInputElement).value
    );

    console.log(
      'FORM:',
      this.formService.form.value
    );
  }
 }
