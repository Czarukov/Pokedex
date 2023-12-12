import { Injectable } from '@angular/core';
import { PokemonInfo, Pokemon } from '../components/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: PokemonInfo[] = [];

  favoritedPokemon: string[] = [];
  constructor(private http: HttpClient) {}

  loadPokemon() {
    this.favoritedPokemon = this.getfavoritedPokemon();
    this.http
      .get<PokemonInfo[]>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .subscribe((data: any) => {
        if (data) {
          this.pokemonList = data.results;
        }
      });
  }

  getPokemonData(pokemonName: string): Observable<Pokemon> {
    const pokemon = this.pokemonList.find(
      (pokemon) => pokemon.name === pokemonName
    );
    return this.http.get<Pokemon>(pokemon!.url);
  }

  isPokemonFavorite(searchString: string): boolean {
    return this.favoritedPokemon.some((item) => item === searchString);
  }
  getfavoritedPokemon() {
    const listFaves = localStorage.getItem('favorited');
    if (listFaves) {
      return JSON.parse(listFaves);
    } else {
      return [];
    }
  }
  setFavoritedPokemon() {
    localStorage.setItem('favorited', JSON.stringify(this.favoritedPokemon));
  }
  addPokemonToFav(namePoke: string) {
    if (!this.favoritedPokemon.includes(namePoke)) {
      this.favoritedPokemon.push(namePoke);
    }
    this.setFavoritedPokemon();
  }
  removePokemonFromFav(namePoke: string) {
    const index = this.favoritedPokemon.indexOf(namePoke);
    if (index !== -1) {
      this.favoritedPokemon.splice(index, 1);
    }
    this.setFavoritedPokemon();
  }
}
