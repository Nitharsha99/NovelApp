import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book, BookAdd } from "../models/book";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl = 'http://localhost:5199/api/book'; // your .NET API

    constructor(private http: HttpClient) { }

    addBook(book: BookAdd): Observable<BookAdd> {
        return this.http.post<Book>(this.apiUrl, book);
    }
}