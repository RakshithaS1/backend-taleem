import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // BehaviorSubject to store the loader's visibility state
  private isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoading.asObservable();

  // Method to show the loader
  show(): void {
    this.isLoading.next(true);
  }

  // Method to hide the loader
  hide(): void {
    this.isLoading.next(false);
  }
}
