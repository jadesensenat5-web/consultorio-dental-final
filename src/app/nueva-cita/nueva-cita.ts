import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CITAS, PACIENTES, DENTISTAS, SERVICIOS, EstadoCita } from '../datos';

@Component({
  selector: 'app-nueva-cita',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './nueva-cita.html',
  styleUrl: './nueva-cita.css'
})
export class NuevaCita {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  pacientes = PACIENTES;
  dentistas = DENTISTAS;
  servicios = SERVICIOS;
  estados: EstadoCita[] = ['Vigente', 'En proceso', 'Finalizada'];

  enviado = false;
  guardada = false;

  form = this.fb.group({
    pacienteId: ['', Validators.required],
    dentistaId: ['', Validators.required],
    servicioId: ['', Validators.required],
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
    estado: ['Vigente', Validators.required],
  });

  invalido(campo: string) {
    const c = this.form.get(campo);
    return !!c && c.invalid && (c.touched || this.enviado);
  }
formatearHora(h: string) {
  const [hh, mm] = h.split(':').map(Number);
  const sufijo = hh >= 12 ? 'p. m.' : 'a. m.';
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${h12}:${String(mm).padStart(2, '0')} ${sufijo}`;
}
  guardar() {
    this.enviado = true;
    if (this.form.invalid) return;

    const v = this.form.value;
    const nuevoId = Math.max(...CITAS.map(c => c.id)) + 1;

    CITAS.push({
      id: nuevoId,
      fecha: v.fecha!,
      hora: this.formatearHora(v.hora!),
      pacienteId: Number(v.pacienteId),
      dentistaId: Number(v.dentistaId),
      servicioId: Number(v.servicioId),
      estado: v.estado as EstadoCita,
    });

    this.guardada = true;
    setTimeout(() => this.router.navigate(['/citas']), 1200);
  }
}