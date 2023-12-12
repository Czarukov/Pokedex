import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../components/models';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent implements OnInit {
  constructor(public pokemonService: PokemonService, private router: Router) {}
  pokemon!: Pokemon;
  ngOnInit(): void {
    const pokeName = this.router.url.split('/').pop();
    this.pokemonService.getPokemonData(pokeName!).subscribe((data: Pokemon) => {
      this.pokemon = data;
    });
  }
}
