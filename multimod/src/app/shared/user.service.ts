import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('../../assets/json/users.json');
  }

  getUsersByUsername(username: string): Observable<User | undefined> {
    return this.getUsers().pipe(
      map((users: User[]) => users.find((user) => user.username === username))
    );
  }

  getUsersById(id: number): Observable<User | undefined> {
    return this.getUsers().pipe(
      map((users: User[]) => users.find((user) => user.id === id))
    );
  }
}
