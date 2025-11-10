import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Personas } from './components/personas/personas';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'personas', component: Personas },
];
