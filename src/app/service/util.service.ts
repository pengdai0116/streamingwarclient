import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  backendUrl = 'http://streamingwarservice.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
  };

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(serviceName: string, operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(serviceName, `${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a Service message with the MessageService */
  log(serviceName: string, message: string): void {
    this.messageService.add(`${serviceName}: ${message}`);
  }
}
