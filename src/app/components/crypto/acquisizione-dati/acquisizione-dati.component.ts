import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({});
    const tipoCrypto = new FormControl();
    this.form.addControl('tipoCrypto', tipoCrypto);
    const importoInvestito = new FormControl();
    this.form.addControl('importoInvestito', importoInvestito);

    tipoCrypto.valueChanges.subscribe(console.log)
    this.form.valueChanges.subscribe(console.log)
    combineLatest([tipoCrypto.valueChanges, importoInvestito.valueChanges])
      .pipe(
        // filter(([tipoCry, importoInv]) => tipoCry.lenght == 3 && importoInv.lenght == 3),
        map(([tipoCry, importoInv]) => {
          return {
            codiceCrypto: tipoCry,
            investimento: importoInv
          } as AcquisizioneDTO
        })
      ).subscribe(_ => console.log("AcquisizioneDati", _))

  }
  ngAfterViewInit(): void {
    var cta = document.querySelector(".cta");
    var check = 0;

    cta?.addEventListener('click', function (e) {
      var text = e.target['nextElementSibling'];
      var loginText = e.target['parentElement'];
      text.classList.toggle('show-hide');
      loginText.classList.toggle('expand');
      if (check == 0) {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
      }
      else {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
      }
    })
  }
}
