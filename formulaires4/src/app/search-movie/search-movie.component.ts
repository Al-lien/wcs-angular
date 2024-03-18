import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { rangeDateValidator } from './validators/rangeDateValidator';
import { isRequiredValidator } from './validators/isRequiredValidator';

class Movie {
  constructor(
    public name: { id: string | null; title: string | null },
    public type: string,
    public year: number,
    public summary: string
  ) {}
}

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.scss',
})
export class SearchMovieComponent implements OnInit {
  movieTypes: string[] = ['movie', 'TV show', 'episode'];
  summaryTypes: string[] = ['long', 'short'];

  constructor(private fb: FormBuilder) {}

  movieForm = this.fb.group({
    // 👇 "name" or "identifier"
    name: this.fb.group(
      {
        id: [''],
        title: [''],
      },
      { validators: isRequiredValidator() }
    ),
    type: [this.movieTypes[1]],
    year: ['', rangeDateValidator()],
    summary: [''],
  });

  ngOnInit(): void {
    this.movieForm.patchValue({
      summary: this.summaryTypes[1],
    });

    // 👇 zebi
    this.movieForm.valueChanges.subscribe((value) => {
      console.log('movieForm value changes : ', value);
    });
  }

  onSubmit() {
    console.log(this.movieForm.value);
  }

  get name() {
    return this.movieForm.get('name');
  }

  get year() {
    return this.movieForm.get('year');
  }

  get id() {
    return this.movieForm.get('name.id');
  }
}
