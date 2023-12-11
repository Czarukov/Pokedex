import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'pokemon/:poke-name',
        loadComponent: () =>
          import('./pages/pokemon/pokemon.component').then(
            (c) => c.PokemonComponent
          ),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('./pages/favorites/favorites.component').then(
            (c) => c.FavoritesComponent
          ),
      },
    ],
  },
];
