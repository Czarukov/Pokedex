import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  constructor(public pokemonService: PokemonService, public router: Router) {}
}
