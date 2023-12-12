import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PokeButtonComponent } from '../../components/poke-button/poke-button.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, PokeButtonComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent implements OnInit {
  constructor(public router: Router, private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.loadPokemon();
  }
}
