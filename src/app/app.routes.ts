import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cocktails/:cocktailId', component: CocktailDetailsComponent },
];
