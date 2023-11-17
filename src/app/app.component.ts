import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Patient } from '../patients.interface';
import { Doctor } from '../doctors.interface';

import { DoctorsDataComponent } from './doctors-data/doctors-data.component';
import { PatientsDataComponent } from './patients-data/patients-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DoctorsDataComponent, PatientsDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hospital-management';


  doctorsData: Doctor[] = [
    { id: "1", name: 'Dr. John Doe', specialization: 'Cardiologist' },
    { id: '2', name: 'Dr. Alice Johnson', specialization: 'Pediatrician' },
    // Add more doctors
  ];

  patientsData: Patient[] = [
    { id: "1", name: 'Jane Smith', condition: 'Fever' },
    { id: "2", name: 'Bob Brown', condition: 'Fracture' },
    // Add more patients
  ];


  addDoctor(id:string, name:string, specialization:string){
    this.doctorsData.push({ id,name,specialization })
  }
  addPatient(id:string, name:string, condition:string){
    this.patientsData.push({ id,name,condition })
  }

}
