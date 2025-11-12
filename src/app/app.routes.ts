import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Personas } from './components/personas/personas';
import { Coches } from './components/coches/coches';
import { Plantilla } from './components/plantilla/plantilla';
import { PlantillaFuncionMultiple } from './components/plantillafuncionmultiple/plantillafuncionmultiple';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'personas', component: Personas },
  { path: 'coches', component: Coches },
  { path: 'plantilla', component: Plantilla },
  { path: 'plantillamultiple', component: PlantillaFuncionMultiple },
];
