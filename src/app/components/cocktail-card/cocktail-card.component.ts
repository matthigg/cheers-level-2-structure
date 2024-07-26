import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail';
import { CommonModule } from '@angular/common';
import { AlcoholicPipe } from '../../shared/pipes/alcoholic.pipe';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [ AlcoholicPipe, CommonModule ],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss'
})
export class CocktailCardComponent implements OnInit{
  @Input() cocktailData?: Cocktail;

  ngOnInit(): void {
    // console.log('--- cocktailData:', this.cocktailData)
  }

}
