import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    //
  }

  navigateToAdd(): void{
    this.router.navigate(['/book-detail', 0]);
  }
}
