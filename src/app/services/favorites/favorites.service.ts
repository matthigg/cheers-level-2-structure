import { inject, Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageService = inject(StorageService<number[]>);

  constructor() { }

  toggleFavorite(id: number): void {
    let favorites = this.storageService.getStorage(this.storageService.storageKey);
    favorites.includes(id)
      ? favorites = favorites.filter((favoriteId: number) => favoriteId !== id)
      : favorites.push(id);
    this.storageService.setStorage(this.storageService.storageKey, favorites);
  }
}
