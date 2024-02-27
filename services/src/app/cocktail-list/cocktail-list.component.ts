import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../Cocktails';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailServiceService) {}

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
