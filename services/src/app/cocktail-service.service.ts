import { Injectable } from '@angular/core';
import { Cocktail } from './Cocktails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('./assets/cocktails.json');
  }
}
