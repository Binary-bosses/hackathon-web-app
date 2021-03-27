import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Hackathon } from './hackathon';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://api.code-hackathon.com/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getHackathons(): Observable<Hackathon> {
    const url = `${apiUrl}/hackathons`;
    return this.http.get<Hackathon>(url).pipe(
      tap(_ => console.log(`fetched hackathons`)),
      catchError(this.handleError<Hackathon>(`getHackathons`))
    );
  }
  getHackathons2(): Observable<any> {
  const url = `${apiUrl}/hackathons`;
  var config = {headers:  {
          'Access-Control-Allow-Origin': apiUrl
      }
  };
    return this.http.get<any>(url).pipe(
        map(res => res.data)
      );
  }

  getUpcomingHackathons(): Observable<Hackathon> {
    const url = `${apiUrl}/hackathons?status=upcoming`;
    return this.http.get<Hackathon>(url).pipe(
      tap(_ => console.log(`fetched upcoming hackathons`)),
      catchError(this.handleError<Hackathon>(`getUpcomingHackathons`))
    );
  }

    getCompletedHackathons(): Observable<Hackathon> {
      const url = `${apiUrl}/hackathons?status=completed`;
      return this.http.get<Hackathon>(url).pipe(
        tap(_ => console.log(`fetched completed hackathons`)),
        catchError(this.handleError<Hackathon>(`getCompletedHackathons`))
      );
}
    getOngoingHackathons(): Observable<Hackathon> {
      const url = `${apiUrl}/hackathons?status=ongoing`;
      return this.http.get<Hackathon>(url).pipe(
        tap(_ => console.log(`fetched ongoing hackathons`)),
        catchError(this.handleError<Hackathon>(`getOngoingHackathons`))
      );

    }

    getHackathonDetails(name: string): Observable<Hackathon> {
      const url = `${apiUrl}/hackathon?name=${name}`;
      return this.http.get<Hackathon>(url).pipe(
        tap(_ => console.log(`fetched ${name} details`)),
        catchError(this.handleError<Hackathon>(`getHackathonDetails name=${name}`))
      );
      }

    getTeamDetails(name: string): Observable<Hackathon> {
      const url = `${apiUrl}/team?name=${name}`;
      return this.http.get<Hackathon>(url).pipe(
        tap(_ => console.log(`fetched ${name} details`)),
        catchError(this.handleError<Hackathon>(`getTeamDetails name=${name}`))
      );

    }

    validateHackathonName(name: string): Observable<Hackathon> {
      const url = `${apiUrl}/hackathonName?name=${name}`;
      return this.http.get<Hackathon>(url).pipe(
        tap(_ => console.log(`validated ${name} `)),
        catchError(this.handleError<Hackathon>(`validateHackathonName name=${name}`))
      );

    }

    validateTeamName(name: string): Observable<Hackathon> {
      const url = `${apiUrl}/teamName?name=${name}`;
      return this.http.get<Hackathon>(url).pipe(
        tap(_ => console.log(`validated ${name} `)),
        catchError(this.handleError<Hackathon>(`validateTeamName name=${name}`))
      );

    }

    validateAdmin(name: string, pass: string): Observable<Hackathon> {
      const url = `${apiUrl}/admin?pass=${pass}&name=${name}`;
      return this.http.get<Hackathon>(url).pipe(
        tap(_ => console.log(`validated ${name} ${pass} `)),
        catchError(this.handleError<Hackathon>(`validateAdmin name=${name} pass=${pass}`))
      );

    }

  addHackathon(hackathons: Hackathon): Observable<Hackathon> {
    return this.http.post<Hackathon>(apiUrl, hackathons, httpOptions).pipe(
      tap((c: Hackathon) => console.log(`added hackathon w/ id=${c.name}`)),
      catchError(this.handleError<Hackathon>('addHackathon'))
    );
  }

  updateHackathon(hackathons: Hackathon): Observable<Hackathon> {
    return this.http.post<Hackathon>(apiUrl, hackathons, httpOptions).pipe(
      tap((c: Hackathon) => console.log(`updated hackathon w/ id=${c.name}`)),
      catchError(this.handleError<Hackathon>('updateHackathon'))
    );
  }
}
