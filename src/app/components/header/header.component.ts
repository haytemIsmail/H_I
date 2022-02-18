import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const list = document.querySelectorAll('.list');
    function activeLink() {
      list.forEach((item) =>
        item.classList.remove('active'));
      this.classList.add('active')
    }
    list.forEach((item) =>
      item.addEventListener('click', activeLink))
    console.log("after view init", document.querySelectorAll('.navigation ul li'))
    // document.querySelectorAll('li').forEach(el => el.style.width = "100%")
    // var el = document.querySelectorAll('.navigation')[0]['style'].width = 100
    // console.log("el", el)
  }

}
