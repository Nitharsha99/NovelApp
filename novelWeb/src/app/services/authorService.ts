import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthorAdd, Authors } from "../models/author";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:5199/api/author';

    addAuthor(author: AuthorAdd): Observable<AuthorAdd> {
        return this.http.post<Authors>(`${this.apiUrl}/Insert`, author);
    }
}