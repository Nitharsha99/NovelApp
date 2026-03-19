import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Book, BookAdd } from "../models/book";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:5199/api/book'; 

    addBook(book: BookAdd): Observable<BookAdd> {
        return this.http.post<Book>(this.apiUrl, book);
    }
}