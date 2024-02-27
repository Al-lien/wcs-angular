import { Injectable } from '@angular/core';
import { Cocktail } from './Cocktails';
import { COCKTAILS } from './mock-cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  constructor() {}

  getCocktails(): Cocktail[] {
    return COCKTAILS;
  }
}
