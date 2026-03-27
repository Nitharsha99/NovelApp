import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
    //
  }

  navigateToAdd(): void{
    this.router.navigate(['/book-detail', 0]);
  }
}
