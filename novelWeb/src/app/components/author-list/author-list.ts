import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { Authors } from '../../models/author';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-list',
  imports: [CommonModule],
  templateUrl: './author-list.html',
  styleUrl: './author-list.css',
})
export class AuthorList implements OnInit {
  private router = inject(Router);

  authors = signal<Authors[] | null>(null);

  ngOnInit(): void {
     this.authors.set([
      { id: 1, name: 'John', isFollowing: true, created: new Date(), updated: new Date() },
      { id: 2, name: 'David', isFollowing: false, created: new Date(), updated: new Date() }
    ]);
  }

  navigateToAdd(): void {
    this.router.navigate(['/author-detail', 0]);
  }
}
