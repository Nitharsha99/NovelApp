import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Books, BookAdd, BookView } from "../models/book";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:5199/api/book';

    addBook(book: BookAdd): Observable<BookAdd> {
        return this.http.post<Books>(`${this.apiUrl}/Insert`, book);
    }

    getlist(): Observable<BookView[]> {
        return this.http.get<BookView[]>(`${this.apiUrl}/GetList`);
    }

    getById(id: number): Observable<Books> {
        return this.http.get<Books>(`${this.apiUrl}/GetById?id=${id}`);
    }

    delete(id: number): Observable<Boolean> {
        return this.http.delete<Boolean>(`${this.apiUrl}/Delete?id=${id}`);
    }
}