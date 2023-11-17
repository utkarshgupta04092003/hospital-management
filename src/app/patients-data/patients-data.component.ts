import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from '../../patients.interface';

@Component({
  selector: 'app-patients-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients-data.component.html',
  styleUrl: './patients-data.component.css'
})
export class PatientsDataComponent {

  @Input() patients!:Patient[];

}
