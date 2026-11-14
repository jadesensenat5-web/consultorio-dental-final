import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CITAS, PACIENTES, DENTISTAS, SERVICIOS } from '../datos';

@Component({
  selector: 'app-detalle-cita',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './detalle-cita.html',
  styleUrl: './detalle-cita.css'
})
export class DetalleCita {
  private ruta = inject(ActivatedRoute);

  cita = CITAS.find(c => c.id === Number(this.ruta.snapshot.paramMap.get('id')));
  paciente = PACIENTES.find(p => p.id === this.cita?.pacienteId);
  dentista = DENTISTAS.find(d => d.id === this.cita?.dentistaId);
  servicio = SERVICIOS.find(s => s.id === this.cita?.servicioId);

  claseEstado() {
    if (this.cita?.estado === 'Vigente') return 'vigente';
    if (this.cita?.estado === 'En proceso') return 'proceso';
    return 'finalizada';
  }
}