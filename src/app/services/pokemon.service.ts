import { Injectable } from '@angular/core';
import { Pokemon } from '../components/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: Array<Pokemon> = [];

  favoritedPokemon: string[] = [];
  constructor(private http: HttpClient) {}
  loadPokemon() {
    this.http
      .get<Array<Pokemon>>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((data) => {
        console.log(data);
      });
  }
  getPokemon(pokemonName: string): Pokemon | undefined {
    return this.pokemonList.find((pokemon) => pokemon.name === pokemonName);
  }
}
