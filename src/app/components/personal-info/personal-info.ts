import { Component, inject } from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  imports: [],
  selector: 'app-personal-info',
  styleUrl: './personal-info.css',
  templateUrl: './personal-info.html',
})
export class PersonalInfo {
  formService = inject(FormService);
}
