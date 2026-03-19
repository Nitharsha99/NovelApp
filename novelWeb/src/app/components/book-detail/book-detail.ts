import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/bookService';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookAdd } from '../../models/book';

@Component({
  selector: 'app-book-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private bookService = inject(BookService);

  isLoading = signal(false);

  bookForm = this.fb.group({
    title: ['', Validators.required],
    authorId: [null, Validators.required],
    description: [''],
    isCompleted: [false],
    isAlreadyRead: [false]
  })

  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
        isCompleted: this.bookForm.value.isCompleted ?? false,
        isAlreadyRead: this.bookForm.value.isAlreadyRead ?? false
      };

      this.bookService.addBook(bookData).subscribe()
    }
  }

}
