import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
cry = "ALL";
  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getPriceCrypto(this.cry)
      .subscribe(_ => console.log("price", _))
  }

}
