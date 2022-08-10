import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  heading: string;
  heading1: string;
  heading2: string;
  para: string;
  para1: string;
  btnName: string;
  iconImg: string;
  imgContant: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  tiles: Tile[] = [
    {
      heading: 'Let’s talk',
      heading1: 'about',
      heading2: 'your next trip! ',

      para: 'Share your favorite travel destination and we will',
      para1: 'feature it in our next blog ! Share your story Watch highlights',
      cols: 3,
      rows: 5,
      color: '',
      btnName: 'Share Your Story',
      iconImg: '../assets/images/Group 678.png',
      imgContant: 'Watch highlights',
    },
    {
      heading: '',
      heading1: '',
      heading2: '',
      para: '',
      para1: '',
      btnName: '',
      iconImg: '',
      imgContant: '',
      cols: 1,
      rows: 4,
      color: '',
    },
  ];

  ngOnInit(): void {}
}
