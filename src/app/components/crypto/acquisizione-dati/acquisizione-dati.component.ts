import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acquisizione-dati',
  templateUrl: './acquisizione-dati.component.html',
  styleUrls: ['./acquisizione-dati.component.scss']
})
export class AcquisizioneDatiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    var cta = document.querySelector(".cta");
    var check = 0;

    cta.addEventListener('click', function (e) {
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
