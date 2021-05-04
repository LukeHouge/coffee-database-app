import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee.model';

const baseUrl = 'http://localhost:8080/api/coffees';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(baseUrl);
  }

  get(id: any): Observable<Coffee> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(`${baseUrl}?title=${title}`);
  }
}
