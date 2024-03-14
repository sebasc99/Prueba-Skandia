import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static API = environment;

  constructor(private http: HttpClient) { }

  cards(): Observable<HttpResponse<any>> {
    return this.http.get(ApiService.API.CARDS.URL, { observe: 'response' });
  }
}