import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CITAS, PACIENTES, DENTISTAS, SERVICIOS, Cita } from '../datos';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './citas.html',
  styleUrl: './citas.css'
})
export class Citas {
  citas: Cita[] = CITAS;

  paciente(id: number) {
    return PACIENTES.find(p => p.id === id)?.nombre ?? '';
  }

  dentista(id: number) {
    return DENTISTAS.find(d => d.id === id)?.nombre ?? '';
  }

  servicio(id: number) {
    return SERVICIOS.find(s => s.id === id)?.nombre ?? '';
  }

  claseEstado(estado: string) {
    if (estado === 'Vigente') return 'vigente';
    if (estado === 'En proceso') return 'proceso';
    return 'finalizada';
  }
}