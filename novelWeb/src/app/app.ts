import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { BookList } from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, BookList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('novelWeb');
}
