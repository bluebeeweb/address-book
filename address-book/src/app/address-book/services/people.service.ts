import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/config';
import { RandomUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  public randomUser$ = this.getRandomUser();

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<RandomUser> {
    return this.http.get<RandomUser>(apiUrl);
  }

  getPaginatedRandomUser(page = 1, results = 10, seed = 'abc'): Observable<RandomUser> {
    return this.http.get<RandomUser>(`${apiUrl}/?page=${page}&results=${results}&seed=${seed}`)
  }
}
