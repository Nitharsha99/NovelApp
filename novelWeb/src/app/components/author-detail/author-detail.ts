import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/authorService';
import { Alert } from '../../models/alert';
import { CommonModule } from '@angular/common';
import { AuthorAdd } from '../../models/author';

@Component({
  selector: 'app-author-detail',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './author-detail.html',
  styleUrl: './author-detail.css',
})
export class AuthorDetail implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authorService = inject(AuthorService);

  isLoading = signal(false);
  message = signal<Alert | null>(null);

  authorForm = this.fb.group({
    name: ['', Validators.required],
    isFollowing: []
  })

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  backToList(): void {
    this.router.navigate(['/author-list']);
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

  addAuthor(){
    if(this.authorForm.valid){
      this.isLoading.set(true);

      const data: AuthorAdd = {
        name: this.authorForm.value.name!,
        isFollowing: this.authorForm.value.isFollowing ?? false
      };

      this.authorService.addAuthor(data).subscribe({
        next: () => {
          this.showMessage({
            type: 'success',
            message: "✅ New Author added successfully!!",
            timeout: 3000,
            showClose: false
          });
          this.authorForm.reset();
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

}
