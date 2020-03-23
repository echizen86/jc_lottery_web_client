import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Lotto } from './data-type/lotto';
import { Observable } from 'rxjs';
import { LottoType } from './data-type/lotto-type';
import { isNullOrUndefinedOrEmpty } from 'src/app/shared/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private REST_API_SERVER = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  insertLottoNumber(lottoNumber: Lotto): Observable<Lotto> {
    return this.httpClient.post<Lotto>(this.REST_API_SERVER + '/lotto/save-lotto-number', lottoNumber);
  }

  getLottoTypes(): Observable<LottoType[]> {
    return this.httpClient.get<LottoType[]>(this.REST_API_SERVER + '/lotto-type/lotto-types');
  }

  getLottoNumbers(lottoType: string, dateFrom?: Date, dateTo?: Date): Observable<Lotto[]> {
    const params = new HttpParams().set('lottoType', lottoType);
    if (!isNullOrUndefinedOrEmpty(dateFrom) && !isNullOrUndefinedOrEmpty(dateTo)) {
      params.append('dateFrom', dateFrom.toDateString()).append('dateTo', dateTo.toDateString());
    }
    return this.httpClient.get<Lotto[]>(this.REST_API_SERVER + '/lotto/numbers-lotto-type', {params});
  }
}
