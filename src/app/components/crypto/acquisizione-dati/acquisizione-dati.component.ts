import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AcquisizioneDTO } from 'src/app/model/acquisizione-dto';
import { CryptoDTO } from 'src/app/model/crypto-dto';

@Component({
  selector: 'app-acquisizione-dati',
  templateUrl: './acquisizione-dati.component.html',
  styleUrls: ['./acquisizione-dati.component.scss']
})
export class AcquisizioneDatiComponent implements OnInit {
  form: FormGroup;
  @Output()
  done: EventEmitter<AcquisizioneDTO> = new EventEmitter<AcquisizioneDTO>();

  private currencyToNumber(s: string): number {
    return Number(s.replace(/\./g, '').replace(',', '.') || undefined);
  }

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({});
    const tipoCrypto = new FormControl();
    this.form.addControl('tipoCrypto', tipoCrypto);

    const importoInvestito = new FormControl();
    this.form.addControl('importoInvestito', importoInvestito);

    const prezzo = new FormControl();
    this.form.addControl('prezzo', prezzo);

    tipoCrypto.valueChanges.subscribe(_ => console.log("tipoCrypto", _));
  }
  ngAfterViewInit(): void {

  }

  addedCrypto() {
    let acquisizioneDati = {} as AcquisizioneDTO;
    acquisizioneDati = {
      codiceCrypto: this.form.get('tipoCrypto').value,
      investimento: this.currencyToNumber(this.form.get('importoInvestito').value),
      prezzo: this.currencyToNumber(this.form.get('prezzo').value)
    }
    this.done.emit(acquisizioneDati);
  }
}
