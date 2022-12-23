import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import {Observable, catchError, retry, throwError} from 'rxjs';
import {INotes} from './notes'


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private url = 'http://localhost:5000'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<INotes[]> {
    return this.httpClient.get<INotes[]>(this.url + '/notes/', this.httpOptions)
      .pipe(
        retry(5),
        catchError((error: HttpErrorResponse) => throwError(error))
      )  
  }

  createNote(note: INotes): Observable<INotes> {
    return this.httpClient.post<INotes>(this.url + '/notes/', {
      title: note.title,
      content: note.content
    }, this.httpOptions)
      .pipe(
        retry(5),
        catchError((error: HttpErrorResponse) => throwError(error))
      )  
  }

  updateNote(note: INotes): Observable<INotes> {
    return this.httpClient.put<INotes>(this.url + `/notes/${note._id}`, {
      title: note.title,
      content: note.content
    }, this.httpOptions)
      .pipe(
        retry(5),
        catchError((error: HttpErrorResponse) => throwError(error))
      )  
  }

  deleteNote(_id: string): Observable<INotes> {
    return this.httpClient.delete<INotes>(this.url + `/notes/${_id}`, this.httpOptions)
      .pipe(
        retry(5),
        catchError((error: HttpErrorResponse) => throwError(error))
      )  
  }
}
