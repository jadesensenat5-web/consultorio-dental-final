import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CITAS, PACIENTES, DENTISTAS } from '../datos';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class Panel {
  totalPacientes = PACIENTES.length;
  totalDentistas = DENTISTAS.length;
  totalCitas = CITAS.length;

  vigentes = CITAS.filter(c => c.estado === 'Vigente').length;
  enProceso = CITAS.filter(c => c.estado === 'En proceso').length;
  finalizadas = CITAS.filter(c => c.estado === 'Finalizada').length;

  proximas = CITAS.filter(c => c.estado !== 'Finalizada');

  paciente(id: number) {
    return PACIENTES.find(p => p.id === id)?.nombre ?? '';
  }

  dentista(id: number) {
    return DENTISTAS.find(d => d.id === id)?.nombre ?? '';
  }

  claseEstado(estado: string) {
    if (estado === 'Vigente') return 'vigente';
    if (estado === 'En proceso') return 'proceso';
    return 'finalizada';
  }
}