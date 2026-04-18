import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Books, BookView, statusDisplay } from '../../models/book';
import { BookService } from '../../services/bookService';
import { AuthorService } from '../../services/authorService';
import { Alert } from '../../models/alert';

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
  message = signal<Alert | null>(null);

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.bookService.getlist().subscribe({
      next: (data) => {
        this.books.set(data);
      },
      error: (err) => {
        this.showErrorMessage(err.error?.message);
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

  deleteBook(id: number) {
    this.bookService.delete(id).subscribe({
      next: (res) => {
        if (res) {
          this.showMessage({
            type: 'success',
            message: "✅ The book deleted successfully!!",
            timeout: 3000,
            showClose: false
          });
          this.loadData();
        }
      },
      error: (error) => {
        this.showErrorMessage(error.error?.message);
      }
    })
  }

  showMessage(msg: Alert) {
    this.message.set(msg);

    if (msg.timeout) {
      setTimeout(() => {
        this.message.set(null);
      }, msg.timeout);
    }
  }

  showErrorMessage(error: string) {
    this.showMessage({
      type: 'danger',
      message: error || '❌ Something went wrong!',
      timeout: 3000,
      showClose: false
    });
  }

}
