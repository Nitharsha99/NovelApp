import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Books, BookView, statusDisplay } from '../../models/book';
import { BookService } from '../../services/bookService';
import { AuthorService } from '../../services/authorService';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  private router = inject(Router);
  private bookService = inject(BookService);
  private authorService = inject(AuthorService);

  books = signal<BookView[] | null>(null);

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.bookService.getlist().subscribe({
      next: (data) => {
        this.books.set(data);
      },
      error: (err) => {
        console.error(err);
        this.books.set([]); // optional fallback
      }
    })
  }

  navigateToAdd(): void {
    this.router.navigate(['/book-detail', 0]);
  }

  getStatusLabel(value: number): string {
    return statusDisplay.find(s => s.value === value)?.label ?? 'Unknown';
  }
}
