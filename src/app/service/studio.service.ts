import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable, of} from 'rxjs';
import {Studio} from '../model/studio';
import {catchError, tap} from 'rxjs/operators';
import {UtilService} from './util.service';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  // private studioUrl = 'api/studios';
  private studioUrl = `${this.utilService.backendUrl}/api/studio`;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private utilService: UtilService) { }

  public getStudios(): Observable<Studio[]> {
    return this.http.get<Studio[]>(this.studioUrl)
      .pipe(
        tap(_ => this.utilService.log('StudioService', 'fetched studios')),
        catchError(this.utilService.handleError<Studio[]>('StudioService', 'getStudios', []))
      );
  }

  public getStudio(id: number): Observable<Studio> {
    const url = `${this.studioUrl}/${id}`;
    return this.http.get<Studio>(url)
      .pipe(
        tap(_ => this.utilService.log('StudioService', 'fetched studio id=${id}')),
        catchError(this.utilService.handleError<Studio>('StudioService', 'getStudio id=${id}'))
      );
  }

  public save(studio: Studio): Observable<Studio> {
    return this.http.post<Studio>(this.studioUrl, studio);
  }
}
