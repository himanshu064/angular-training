import { Component, OnInit } from '@angular/core';

export interface Tile {
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

export interface Hero {
  cols: number;
  rows: number;
  img: string;
  heading: string;
  heading1: string;
  para: string;
  iconImg: string;
  btnName: string;
}

export interface country {
  cols: number;
  rows: number;
  img: string;
  heading: string;
  para: string;
  alt: string;
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
    },
  ];

  heroSection: Hero[] = [
    {
      heading: '',
      heading1: '',
      para: '',
      cols: 3,
      rows: 4,
      img: '../assets/images/Featured Image.png',
      btnName: '',
      iconImg: '',
    },
    {
      heading: 'FEATURED DESTINATION',
      heading1: 'Our swiss adventure blog',
      img: '',
      para: ' Visiting the swiss alps? Want to know the requirements on travelling to Switzerland during the pandemic? Our blog might help! Watch Now',
      btnName: 'Watch Now',
      iconImg: '../assets/images/Group 678.png',
      cols: 2,
      rows: 4,
    },
  ];

  countryIS: country[] = [
    {
      img: 'assets/images/Iceland card image.png',
      heading: 'Iceland',
      para: 'Discover',
      alt: 'Iceland',
      cols: 1,
      rows: 5,
    },
    {
      img: 'assets/images/Italy card image.png',
      heading: 'Italy',
      para: 'Discover',
      alt: 'Italy',
      cols: 1,
      rows: 5,
    },
    {
      img: 'assets/images/Dubai card image.png',
      heading: 'Dubai',
      para: 'Discover',
      alt: 'Dubai',
      cols: 1,
      rows: 5,
    },
    {
      img: 'assets/images/Patagonia Card Image.png',
      heading: 'Patagonia',
      para: 'Discover',
      alt: 'Patagonia',
      cols: 1,
      rows: 5,
    },
  ];

  ngOnInit(): void {}
}
