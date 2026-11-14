import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { DENTISTAS, SERVICIOS } from '../datos';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  dentistas = DENTISTAS;
  servicios = SERVICIOS.slice(0, 3);
}