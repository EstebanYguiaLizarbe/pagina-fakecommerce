import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSignal = signal<Product[]>([]);
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);
  private searchTermSignal = signal<string>('');
  private categoryFilterSignal = signal<string | null>(null);
  
  products = computed(() => this.productsSignal());
  loading = computed(() => this.loadingSignal());
  error = computed(() => this.errorSignal());
  
  filteredProducts = computed(() => {
    const products = this.productsSignal();
    const searchTerm = this.searchTermSignal().toLowerCase();
    const category = this.categoryFilterSignal();
    
    return products.filter(product => {
      const matchesSearch = !searchTerm || product.title.toLowerCase().includes(searchTerm);
      const matchesCategory = !category || product.category === category;
      return matchesSearch && matchesCategory;
    });
  });

  constructor(private http: HttpClient) {}

  loadProducts(): Observable<Product[]> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    
    return this.http.get<Product[]>(`${environment.API_URL}/products`)
      .pipe(
        tap(products => {
          this.productsSignal.set(products);
          this.loadingSignal.set(false);
        }),
        catchError(error => {
          this.errorSignal.set('Error al cargar los productos');
          this.loadingSignal.set(false);
          return of([]);
        })
      );
  }

  getProductById(id: number): Observable<Product> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    
    return this.http.get<Product>(`${environment.API_URL}/products/${id}`)
      .pipe(
        tap(() => this.loadingSignal.set(false)),
        catchError(error => {
          this.errorSignal.set('Error al cargar el producto');
          this.loadingSignal.set(false);
          throw error;
        })
      );
  }

  setSearchTerm(term: string): void {
    this.searchTermSignal.set(term);
  }

  setCategoryFilter(category: string | null): void {
    this.categoryFilterSignal.set(category);
  }
}
