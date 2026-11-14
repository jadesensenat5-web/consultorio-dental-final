import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Panel } from './panel/panel';
import { Citas } from './citas/citas';
import { Pacientes } from './pacientes/pacientes';
import { Dentistas } from './dentistas/dentistas';
import { Servicios } from './servicios/servicios';
import { DetalleCita } from './detalle-cita/detalle-cita';
import { NuevaCita } from './nueva-cita/nueva-cita';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'panel', component: Panel },
  { path: 'citas', component: Citas },
  { path: 'citas/nueva', component: NuevaCita },
  { path: 'citas/:id', component: DetalleCita },
  { path: 'pacientes', component: Pacientes },
  { path: 'dentistas', component: Dentistas },
  { path: 'servicios', component: Servicios },
  { path: '**', redirectTo: '' },
];