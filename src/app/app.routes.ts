import { Routes } from '@angular/router';

export const rotas: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./paginas/jogo-da-velha.component').then(m => m.JogoDaVelhaComponent),
  },
];

