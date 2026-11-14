import { Component } from '@angular/core';
import { DENTISTAS, Dentista } from '../datos';

@Component({
  selector: 'app-dentistas',
  standalone: true,
  imports: [],
  templateUrl: './dentistas.html',
  styleUrl: './dentistas.css'
})
export class Dentistas {
  dentistas: Dentista[] = DENTISTAS;
}