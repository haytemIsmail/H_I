import { Component, Input, OnInit } from '@angular/core';
import { CryptoDTO } from 'src/app/model/crypto-dto';

@Component({
  selector: 'app-tabella-prezzi-crypto',
  templateUrl: './tabella-prezzi-crypto.component.html',
  styleUrls: ['./tabella-prezzi-crypto.component.scss']
})
export class TabellaPrezziCryptoComponent implements OnInit {

  @Input()
  listaCrypto: Array<CryptoDTO>;
  constructor() { }

  ngOnInit(): void {
    console.log("listaCrypto", this.listaCrypto);
  }

}
