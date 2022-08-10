import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  countryImg = [
    {
      img: 'assets/images/Iceland card image.png',
      heading: 'Iceland',
      para: 'Discover',
      alt: 'Iceland',
    },

    {
      img: 'assets/images/Italy card image.png',
      heading: 'Italy',
      para: 'Discover',
      alt: 'Italy',
    },

    {
      img: 'assets/images/Dubai card image.png',
      heading: 'Dubai',
      para: 'Discover',
      alt: 'Dubai',
    },
    {
      img: 'assets/images/Patagonia Card Image.png',
      heading: 'Patagonia',
      para: 'Discover',
      alt: 'Patagonia',
    },
  ];
}
