import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { CategoryService } from '../../core/services/category.service';
import { Product } from '../../core/models/product.model';

// PrimeNG imports
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    ProgressSpinnerModule,
    ImageModule,
    TagModule,
    DropdownModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  searchTerm = signal('');
  selectedCategory: string | null = null;
  
  categories = [
    { label: 'Todas las categorías', value: null },
    { label: 'Electronics', value: 'electronics' },
    { label: 'Jewelery', value: 'jewelery' },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" }
  ];

  constructor(
    public productService: ProductService,
    private router: Router,
    public categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.loadProducts().subscribe();
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
    this.productService.setSearchTerm(value);
  }

  onCategoryChange(event: any): void {
    this.selectedCategory = event.value;
    this.productService.setCategoryFilter(event.value);
  }

  viewDetail(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = '';
  }
}
