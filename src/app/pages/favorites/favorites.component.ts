import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  constructor(public pokemonService: PokemonService) {}
}
