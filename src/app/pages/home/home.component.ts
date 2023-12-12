import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PokemonService } from '../../services/pokemon.service';
import { PokeButtonComponent } from '../../components/poke-button/poke-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, PokeButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public pokemonService: PokemonService, public router: Router) {}
}
