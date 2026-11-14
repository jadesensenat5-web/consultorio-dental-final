export interface Paciente {
  id: number;
  nombre: string;
  telefono: string;
  correo: string;
  edad: number;
}

export interface Dentista {
  id: number;
  nombre: string;
  especialidad: string;
  horario: string;
}

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

export type EstadoCita = 'Vigente' | 'En proceso' | 'Finalizada';

export interface Cita {
  id: number;
  fecha: string;
  hora: string;
  pacienteId: number;
  dentistaId: number;
  servicioId: number;
  estado: EstadoCita;
}

export const PACIENTES: Paciente[] = [
  { id: 1, nombre: 'María Pérez', telefono: '809-555-0101', correo: 'maria@correo.com', edad: 34 },
  { id: 2, nombre: 'Juan Rodríguez', telefono: '809-555-0102', correo: 'juan@correo.com', edad: 28 },
  { id: 3, nombre: 'Ana Martínez', telefono: '809-555-0103', correo: 'ana@correo.com', edad: 45 },
  { id: 4, nombre: 'Carlos Gómez', telefono: '809-555-0104', correo: 'carlos@correo.com', edad: 19 },
  { id: 5, nombre: 'Laura Santos', telefono: '809-555-0105', correo: 'laura@correo.com', edad: 52 },
];

export const DENTISTAS: Dentista[] = [
  { id: 1, nombre: 'Dra. Carolina Díaz', especialidad: 'Odontología general', horario: 'Lun a Vie, 8:00 a. m. - 4:00 p. m.' },
  { id: 2, nombre: 'Dr. Miguel Ramírez', especialidad: 'Ortodoncia', horario: 'Lun, Mié y Vie, 9:00 a. m. - 5:00 p. m.' },
  { id: 3, nombre: 'Dra. Patricia Núñez', especialidad: 'Endodoncia', horario: 'Mar y Jue, 8:00 a. m. - 3:00 p. m.' },
];

export const SERVICIOS: Servicio[] = [
  { id: 1, nombre: 'Limpieza dental', descripcion: 'Eliminación de sarro y placa.', precio: 1500 },
  { id: 2, nombre: 'Blanqueamiento', descripcion: 'Aclara el tono de tus dientes.', precio: 5000 },
  { id: 3, nombre: 'Ortodoncia', descripcion: 'Corrección de la posición dental.', precio: 25000 },
  { id: 4, nombre: 'Endodoncia', descripcion: 'Tratamiento de conducto.', precio: 8000 },
  { id: 5, nombre: 'Extracción', descripcion: 'Retiro de piezas dentales.', precio: 2000 },
];

export const CITAS: Cita[] = [
  { id: 1, fecha: '2026-11-16', hora: '9:00 a. m.', pacienteId: 1, dentistaId: 1, servicioId: 1, estado: 'Vigente' },
  { id: 2, fecha: '2026-11-16', hora: '10:30 a. m.', pacienteId: 2, dentistaId: 2, servicioId: 3, estado: 'En proceso' },
  { id: 3, fecha: '2026-11-17', hora: '8:30 a. m.', pacienteId: 3, dentistaId: 3, servicioId: 4, estado: 'Vigente' },
  { id: 4, fecha: '2026-11-13', hora: '2:00 p. m.', pacienteId: 4, dentistaId: 1, servicioId: 5, estado: 'Finalizada' },
  { id: 5, fecha: '2026-11-12', hora: '11:00 a. m.', pacienteId: 5, dentistaId: 1, servicioId: 2, estado: 'Finalizada' },
  { id: 6, fecha: '2026-11-18', hora: '3:00 p. m.', pacienteId: 1, dentistaId: 2, servicioId: 3, estado: 'Vigente' },
];