import { Component, inject } from '@angular/core';
import { FormService } from '../../form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { pattern } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-personal-info',
  styleUrl: './personal-info.css',
  templateUrl: './personal-info.html',
})
export class PersonalInfo {
  formService = inject(FormService);
  protected readonly pattern = pattern;
}
