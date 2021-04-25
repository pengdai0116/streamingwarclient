import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Demo} from '../model/demo';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from '../message.service';
import {WatchedEvent} from '../model/watched-event';
import {UtilService} from './util.service';

@Injectable({
  providedIn: 'root'
})
export class DemoGroupService {
  // private demoGroupsUrl = 'api/demos';
  private demoGroupsUrl = `${this.utilService.backendUrl}/api/demo`;

  constructor(private http: HttpClient,
              private messageService: MessageService, private utilService: UtilService) {
  }

  public getDemoGroups(): Observable<Demo[]> {
    return this.http.get<Demo[]>(this.demoGroupsUrl)
      .pipe(
        tap(_ => this.utilService.log('DemoGroupService', 'fetched demoGroups')),
        catchError(this.utilService.handleError<Demo[]>('getDemoGroups', 'getDemoGroups', []))
      );
  }

  /** GET demo by demoId. Return `undefined` when demoId not found */
  public getDemoNo404<Data>(demoId: number): Observable<Demo> {
    const url = `${this.demoGroupsUrl}/?demoId=${demoId}`;
    return this.http.get<Demo[]>(url)
      .pipe(
        map(demos => demos[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.utilService.log('DemoGroupService', `${outcome} demo demoId=${demoId}`);
        }),
        catchError(this.utilService.handleError<Demo>(`getDemo id=${demoId}`))
      );
  }

  public getDemoGroup(demoId: number): Observable<Demo> {
    const url = `${this.demoGroupsUrl}/${demoId}`;
    console.log(url);
    return this.http.get<Demo>(url)
      .pipe(
        tap(_ => this.utilService.log('DemoGroupService', 'fetched demo demoId=${demoId}')),
        catchError(this.utilService.handleError<Demo>('getDemo demoId=${demoId}'))
      );
  }

  public updateDemoGroup(demoGroup: Demo): Observable<any> {
    const requestBodyUrl = `${this.demoGroupsUrl}/${demoGroup.id}`;
    // const requestParamUrl = `${this.demoGroupsUrl}/updateDemo?demoShortName=${demoGroup.demoShortName}&demoLongName=${demoGroup.demoLongName}`;
    return this.http.put(requestBodyUrl, demoGroup, this.utilService.httpOptions).pipe(
      tap(_ => this.utilService.log('DemoGroupService', 'updated demoGroup demoId=${demoGroup.demoId}')),
      catchError(this.utilService.handleError<any>('updateDemoGroup'))
    );
  }

  public watchEvent(watchedEvent: WatchedEvent): Observable<any> {
    const url = `${this.demoGroupsUrl}/watchEvent?demoShortName=${watchedEvent.demoShortName}&percentage=${watchedEvent.percentage}&streamShortName=${watchedEvent.streamShortName}&eventName=${watchedEvent.eventName}&eventYear=${watchedEvent.eventYear}`;
    console.log(watchedEvent);
    return this.http.put(url, watchedEvent, this.utilService.httpOptions).pipe(
      tap(_ => this.utilService.log('DemoGroupService', 'updated demoGroup demoId=${demoGroup.demoId}')),
      catchError(this.utilService.handleError<any>('DemoGroupService', 'updateDemoGroup'))
    );
  }

  public save(demoGroup: Demo): Observable<Demo> {
    return this.http.post<Demo>(this.demoGroupsUrl, demoGroup);
  }
}
