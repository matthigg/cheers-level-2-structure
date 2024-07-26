import { Component, inject, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail';
import { CommonModule } from '@angular/common';
import { AlcoholicPipe } from '../../shared/pipes/alcoholic.pipe';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [ AlcoholicPipe, CommonModule, RouterModule ],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss'
})
export class CocktailCardComponent implements OnInit{
  @Input() cocktailData: Cocktail;

  protected favoritesService = inject(FavoritesService);

  ngOnInit(): void {
    // console.log('--- cocktailData:', this.cocktailData)
  }

}
