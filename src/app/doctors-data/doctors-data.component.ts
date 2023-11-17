import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../doctors.interface';

@Component({
  selector: 'app-doctors-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors-data.component.html',
  styleUrl: './doctors-data.component.css'
})
export class DoctorsDataComponent {

    @Input() doctors!:Doctor[];
}
