import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-poke-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './poke-button.component.html',
  styleUrl: './poke-button.component.css',
})
export class PokeButtonComponent {
  @Input() isPokemonButton!: boolean;
  constructor() {}
}
