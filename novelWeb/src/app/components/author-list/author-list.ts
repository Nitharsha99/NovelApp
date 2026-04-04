import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { Authors } from '../../models/author';
import { CommonModule } from '@angular/common';
import { AuthorService } from '../../services/authorService';

@Component({
  selector: 'app-author-list',
  imports: [CommonModule],
  templateUrl: './author-list.html',
  styleUrl: './author-list.css',
})
export class AuthorList implements OnInit {
  private router = inject(Router);
  private authorService = inject(AuthorService);

  authors = signal<Authors[] | null>(null);

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.authorService.getlist().subscribe({
      next: (data) => {
        this.authors.set(data);
      },
      error: (err) => {
        console.error(err);
        this.authors.set([]); // optional fallback
      }
    })
  }

  navigateToAdd(): void {
    this.router.navigate(['/author-detail', 0]);
  }
}
