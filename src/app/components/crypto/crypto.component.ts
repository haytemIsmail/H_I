import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { AcquisizioneDTO } from 'src/app/model/acquisizione-dto';
import { CryptoDTO } from 'src/app/model/crypto-dto';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {

  private currencyToNumber(s: string): number {
    return Number(s.replace(/\./g, '').replace(',', '.') || undefined);
  }

  cry = "BTC";
  crypto$: Subject<Array<CryptoDTO>> = new Subject<Array<CryptoDTO>>();
  cryptoCurrent$: Observable<any>;
  accumuloCry: Array<CryptoDTO> = [];
  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    // this.cryptoService.getPriceCrypto(this.cry)
    //   .subscribe(_ => console.log("price", _))
    const cryptoTransformed$ = this.crypto$
      .pipe(
        map(this.calcolaQuantitaTot),

        tap(cd => console.log("crypto", cd))
      )
  }
  readyAcquisizione(acquisizioneDati: AcquisizioneDTO) {
    // const cryptoCry$ = this.cryptoService.getPriceCrypto(acquisizioneDati.codiceCrypto)
    //   .pipe(map(cry => cry.data.market_data.price_usd));
    let cryptoAttuale = {
      acquisizioneDati: acquisizioneDati,
      avg: 0,
      target: 0,
      time: new Date(),
      quantita: this.calcolaQuantita(acquisizioneDati),
      count: 0,
      quantitaTot: 0
    } as CryptoDTO;

    this.accumuloCry.push(cryptoAttuale);

    this.crypto$.next(this.accumuloCry);
    // cryptoCry$.subscribe(_ => console.log("cryptoCry", _))

  }
  calcolaQuantita(acquisizioneDati: AcquisizioneDTO): any {
    return acquisizioneDati.investimento / acquisizioneDati.prezzo
  }
  calcolaQuantitaTot(cry: Array<CryptoDTO>): Array<CryptoDTO> {
    const lastElement = cry[cry.length - 1];
   /*  cry.reduce((acc, currentValue, index) => {
      if (currentValue.acquisizioneDati.codiceCrypto == lastElement.acquisizioneDati.codiceCrypto) {
        acc
      }
    }, 0) */
    cry.find(el=>el.acquisizioneDati.codiceCrypto== lastElement.acquisizioneDati.codiceCrypto)
    return

  }

  totQuantita(acquisizione: AcquisizioneDTO): number {
    let totalQuantita = this.accumuloCry.reduce((acc, currentValue) => {
      if (acquisizione.codiceCrypto == currentValue.acquisizioneDati.codiceCrypto) {
        acc = + currentValue.quantita
      }
      return acc
    }, 0)
    return totalQuantita
  }
  /* calcolaCapitale(cry: Array<CryptoDTO>): Array<CryptoDTO> {
    const SUM = (crySUM: Array<CryptoDTO>) => crySUM.reduce((acc, currentValue) =>
      (acc + currentValue.investimento), 0);
    console.log("calcolaCapitale", cry);
    return cry.map(el => {
      let newCry = new CryptoDTO();
      newCry = el;
      newCry.capitaleInvestito = SUM(cry);
      return newCry;
    })
 
  } */
  /*  calcolaMedia(cry: Array<CryptoDTO>): Array<CryptoDTO> {
     const AVG = (cryAVG: Array<CryptoDTO>) => cryAVG.reduce((acc, currentValue) =>
       (acc + currentValue.investimento * currentValue.prezzo), 0)

     return cry.map(el => {
       let newCry = new CryptoDTO();
       newCry = el;
       newCry.avg = AVG(cry) / cry[0].capitaleInvestito;
       return newCry;
     })
   } */

  /* calcolaMedia(acquisizione: AcquisizioneDTO): number {


    const isPresent = this.accumuloCry.find(el => el.acquisizioneDati.codiceCrypto == acquisizione.codiceCrypto);
    let avg;
    console.log("conta", this.contaCrypto(acquisizione))
    isPresent
      ? avg = acquisizione.investimento * this.contaCrypto(acquisizione) / this.totQuantita(acquisizione)
      : avg = acquisizione.prezzo;
    console.log("avg", avg);
    return avg;

  } */
  contaCrypto(acquisizione: AcquisizioneDTO): number {
    return this.accumuloCry.reduce((acc, currentValue) => {
      let count = 0
      if (currentValue.acquisizioneDati.codiceCrypto == acquisizione.codiceCrypto) {
        count++
      }
      return count + 1
    }, 0)
  }
}
