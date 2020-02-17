import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lotto } from './data-type/lotto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private REST_API_SERVER = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  insertLottoNumber(lottoNumber: Lotto): Observable<Lotto> {
    return this.httpClient.post<Lotto>(this.REST_API_SERVER + '/save-lotto-number', lottoNumber);
  }
}
