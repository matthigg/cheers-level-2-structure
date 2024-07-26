import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
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
  private cocktails: Cocktail[];

  protected cocktails$: Observable<Cocktail[]>;
  protected cocktailsSignal: WritableSignal<Cocktail[]> = signal([]);

  ngOnInit(): void {
    this.cocktails$ = this.http.get<Cocktail[]>('/cockails').pipe(
      tap(response => {
        this.cocktails = response;
        this.cocktailsSignal.set(response);
      })
    );
  }

  onFilter(value: string): void {
    const filteredCocktails = this.cocktails.filter(cocktail => 
      cocktail.name.toLowerCase().includes(value.toLowerCase())
    );
    this.cocktailsSignal.set(filteredCocktails);
  }
}
