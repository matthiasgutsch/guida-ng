import { Component, OnInit } from '@angular/core';
import { PAGES } from '../constants/constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {


  pages: any;


  constructor() {

    this.pages = PAGES;

   }

  ngOnInit(): void {


  }

}
