import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { SERVICIOS, Servicio } from '../datos';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {
  servicios: Servicio[] = SERVICIOS;
}