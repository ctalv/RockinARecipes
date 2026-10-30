import { Component } from '@angular/core';

import { AllRecipes } from '../all-recipes/all-recipes';
import { RecipeCard } from '../recipe-card/recipe-card';

@Component({
  imports: [AllRecipes, RecipeCard],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {}
