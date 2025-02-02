import { Component, inject, Input } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cocktail } from '../../shared/interfaces/cocktail';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlcoholicPipe } from '../../shared/pipes/alcoholic.pipe';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [ AlcoholicPipe, CommonModule, RouterModule ],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class CocktailDetailsComponent {
  @Input() cocktailId: string;

  private http = inject(HttpClient);

  protected favoritesService = inject(FavoritesService);
  protected cocktailDetails$: Observable<Cocktail>;

  ngOnInit(): void {
    this.cocktailDetails$ = this.http.get<Cocktail>(`/cocktails/${this.cocktailId}`);
  }

  onBack(): void {
    history.back();
  }
}
