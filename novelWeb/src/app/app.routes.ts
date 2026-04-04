import { Routes } from '@angular/router';
import { BookDetail } from './components/book-detail/book-detail';
import { BookList } from './components/book-list/book-list';
import { AuthorList } from './components/author-list/author-list';
import { AuthorDetail } from './components/author-detail/author-detail';

export const routes: Routes = [
    {path: '', component: BookList},
    {path: 'book-list', component: BookList},
    {path: 'book-detail/:id', component: BookDetail},
    {path: 'author-list', component: AuthorList},
    {path: 'author-detail/:id', component: AuthorDetail}
];
