import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageService = inject(StorageService<number[]>);
  private favoritesSignal: WritableSignal<number[]> = signal(this.storageService.getStorage(this.storageService.storageKey));

  readonly favorites = this.favoritesSignal.asReadonly()

  constructor() {
    effect(() => {
      this.storageService.setStorage(this.storageService.storageKey, this.favoritesSignal())
    });
  }

  toggleFavorite(id: number): void {
    if (this.favoritesSignal().includes(id)) {
      this.favoritesSignal.update(() => { return this.favoritesSignal().filter(fav => fav !== id) });
    } else {
      this.favoritesSignal.update(favArray => { favArray.push(id); return favArray.slice(0) });
    }
  }
}
