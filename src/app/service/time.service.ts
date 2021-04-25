import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {UtilService} from './util.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private timeUrl = `${this.utilService.backendUrl}/displayTime`;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private utilService: UtilService) { }

  public getCurrentTimePeriod(): Observable<string> {
    return this.http.get<string>(this.timeUrl)
      .pipe(
        tap(_ => this.utilService.log('TimeService', 'getCurrentTimePeriod')),
        catchError(this.utilService.handleError<string>('TimeService', 'getCurrentTimePeriod', ''))
      );
  }
}
