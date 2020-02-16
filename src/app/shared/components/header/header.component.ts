import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: any;
  sticky: any;

  constructor() { }

  ngOnInit(): void {
    this.header = document.getElementById('myHeader');
    this.sticky = this.header.offsetTop;

    this.myFunction();
  }

  myFunction() {
  if (window.pageYOffset > this.sticky) {
    this.header.classList.add('sticky');
  } else {
    this.header.classList.remove('sticky');
  }
}

}
