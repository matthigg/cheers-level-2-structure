import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cocktail } from '../../shared/interfaces/cocktail';
import { CommonModule } from '@angular/common';
import { CocktailCardComponent } from "../cocktail-card/cocktail-card.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CocktailCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  private http = inject(HttpClient);

  protected cocktails$: Observable<Cocktail[]>;

  ngOnInit(): void {
    this.cocktails$ = this.http.get<Cocktail[]>('/cockails');
  }

  onFilter(value?: string): void {

    console.log('--- value:', value)

  }

}
