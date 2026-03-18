import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/bookService';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail implements OnInit{

  constructor(private router: Router,
              private bookService: BookService
  ){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  backToList(): void{
    this.router.navigate(['/book-list']);
  }

  addBook() {
    //hh
  }

}
