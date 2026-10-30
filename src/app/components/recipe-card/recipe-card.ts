import { Component } from '@angular/core';

import { Ingredients } from '../ingredients/ingredients';
import {  Instructions } from '../instructions/instructions';

@Component({
  imports: [Ingredients, Instructions],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.css',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {}
