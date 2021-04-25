import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from '../message.service';
import {UtilService} from './util.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  isAdminLoggedIn = false;

      private userUrl = `${this.utilService.backendUrl}/api/user`;

  constructor(private http: HttpClient,
              private messageService: MessageService,
              private utilService: UtilService) {
  }

  login(credentials: { password: string; username: string; role: string }): Observable<boolean> {
    const pwd = btoa(credentials.password);
    const url = `${this.userUrl}/login?username=${credentials.username}&password=${pwd}&role=${credentials.role}`;
    return this.http.get<boolean>(url, this.utilService.httpOptions)
      .pipe(
        tap(response => {
          this.isLoggedIn = response;
          this.isAdminLoggedIn = response && credentials.role === 'admin';

          this.utilService.log('authenticate', 'authenticate user credentials');
        }),
        catchError(this.utilService.handleError<boolean>('AuthService', 'authenticate', false))
      );
  }

  addUser(credentials: { password: string; username: string; role: string }): Observable<any> {
    const url = `${this.userUrl}?username=${credentials.username}&password=${btoa(credentials.password)}&role=${credentials.role}`;
    return this.http.post<boolean>(url, this.utilService.httpOptions)
      .pipe(
        tap(_ => {
          this.utilService.log('addUser', 'add user');
        }),
        catchError(this.utilService.handleError<boolean>('AuthService', 'addUser'))
      );
  }

  logOut(): void {
    this.isLoggedIn = false;
    this.isAdminLoggedIn = false;
  }
}
