import { Component } from '@angular/core';
import { PACIENTES, Paciente } from '../datos';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css'
})
export class Pacientes {
  pacientes: Paciente[] = PACIENTES;
}