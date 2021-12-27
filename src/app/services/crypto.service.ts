import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private urlPriceCrypto = "https://data.messari.io/api/v1/assets/"
  private urlconversion = "http://api.exchangeratesapi.io/v1/latest?access_key=a078f7d06e969442118a1569f387e096"
  constructor(private http: HttpClient) { }

  getPriceCrypto(type: string) {
    let url = this.urlPriceCrypto + type + "/metrics";
    return this.http.get<any>(url);
  }
}
