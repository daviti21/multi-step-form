import { Component, inject} from '@angular/core';
import { FormService } from '../../form.service';

@Component({
  imports: [],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  formService = inject(FormService);
}
