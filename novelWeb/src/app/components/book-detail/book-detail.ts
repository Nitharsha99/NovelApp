import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail implements OnInit{

  constructor(private router: Router){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  backToList(): void{
    this.router.navigate(['/book-list']);
  }

}
