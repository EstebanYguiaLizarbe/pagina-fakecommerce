import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getSeverity(category: string): 'success' | 'info' | 'warning' | 'danger' | 'secondary' {
    switch (category.toLowerCase()) {
      case 'electronics':
        return 'info';
      case 'jewelery':
        return 'warning';
      case "men's clothing":
        return 'success';
      case "women's clothing":
        return 'danger';
      default:
        return 'secondary';
    }
  }
}
