import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { delay, retry, switchMap } from 'rxjs/operators';
type prezzoDTO = {
  market_data: {
    price_usd: number
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-crypto-app';
  usdToEuro = 0.86;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const urlPriceCrypto = "https://data.messari.io/api/v1/assets/doge/metrics"
    const urlconversion = "http://api.exchangeratesapi.io/v1/latest?access_key=a078f7d06e969442118a1569f387e096"
  /*  interval(60000).pipe(
     switchMap(val=> this.http.get<any>(urlPriceCrypto))
   ).subscribe((_ris: any) => {
      console.log("prezzo", _ris.data.market_data.price_usd * this.usdToEuro)
    })


    this.http.get(urlconversion).subscribe(_ => console.log("convertion", _)); */
  }
}
