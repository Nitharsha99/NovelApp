import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/bookService';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookAdd, BookStatus, statusDisplay } from '../../models/book';
import { CommonModule } from '@angular/common';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-book-detail',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private bookService = inject(BookService);

  isLoading = signal(false);
  message = signal<Alert | null>(null);
  //bookStatus: BookStatus | undefined;

  statusOptions = statusDisplay;

  bookForm = this.fb.group({
    title: ['', Validators.required],
    authorId: [null, Validators.required],
    description: [''],
    status: [null, Validators.required],
    isAlreadyRead: [false]
  })

  ngOnInit(): void {
      console.log(this.statusOptions);
  }

  backToList(): void {
    this.router.navigate(['/book-list']);
  }

  addBook() {
    if (this.bookForm.valid) {
      this.isLoading.set(true);

      const bookData: BookAdd = {
        title: this.bookForm.value.title!,        // Non-null assertion
        authorId: this.bookForm.value.authorId!,
        description: this.bookForm.value.description || '',  // Default value
        status: this.bookForm.value.status ?? BookStatus.Completed,
        isAlreadyRead: this.bookForm.value.isAlreadyRead ?? false
      };

      this.bookService.addBook(bookData).subscribe({
        next: () => {
          this.showMessage({
            type: 'success',
            message: "✅ New book added successfully!!",
            timeout: 3000,
            showClose: false
          });
          this.bookForm.reset();
        },
        complete: () => {
          this.isLoading.set(false);
        },
        error: (error) => {
          this.showErrorMessage(error.error?.message);
        }
      })
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

  showMessage(msg: Alert) {
    this.message.set(msg);

    if (msg.timeout) {
      setTimeout(() => {
        this.message.set(null);
      }, msg.timeout);
    }
  }

}
