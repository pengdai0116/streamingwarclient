import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs';
import {Stream} from '../model/stream';
import {catchError, tap} from 'rxjs/operators';
import {UtilService} from './util.service';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  // private streamsUrl = 'api/streams';
  private streamsUrl = `${this.utilService.backendUrl}/api/stream`;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private utilService: UtilService) { }

  public getStreams(): Observable<Stream[]> {
    return this.http.get<Stream[]>(this.streamsUrl)
      .pipe(
        tap(_ => this.utilService.log('StreamService', 'fetched streams')),
        catchError(this.utilService.handleError<Stream[]>('getStreams', 'getStreams'))
      );
  }

  public getStream(id: number): Observable<Stream> {
    const url = `${this.streamsUrl}/${id}`;
    return this.http.get<Stream>(url)
      .pipe(
        tap(_ => this.utilService.log('StreamService', 'fetched stream id=${id}')),
        catchError(this.utilService.handleError<Stream>('StreamService', 'getStream id=${id}'))
      );
  }

  public updateStream(stream: Stream): Observable<any> {
    console.log(stream);
    const requestBodyUrl = `${this.streamsUrl}/${stream.id}`;
    // const requestParamUrl = `${this.streamsUrl}/updateStream?streamShortName=${stream.streamShortName}&streamLongName=${stream.streamLongName}`;
    return this.http.put(requestBodyUrl, stream, this.utilService.httpOptions).pipe(
      tap(_ => this.utilService.log('StreamService', 'updated stream streamId=${stream.streamId}')),
      catchError(this.utilService.handleError<any>('updateStream'))
    );
  }

  public save(stream: Stream): Observable<Stream> {
    return this.http.post<Stream>(this.streamsUrl, stream);
  }
}
