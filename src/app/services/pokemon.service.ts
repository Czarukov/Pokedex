import { Injectable } from '@angular/core';
import { Pokemon } from '../components/models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: Pokemon[] = [];
  constructor() {}

  getPokemon(pokemonName: string): void {}
}
