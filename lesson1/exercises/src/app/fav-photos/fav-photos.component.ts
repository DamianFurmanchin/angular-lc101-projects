import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Photo Choices';
  image1 = 'https://m.media-amazon.com/images/M/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_SX300_.jpg';
  image2 = 'https://www.logolynx.com/images/logolynx/s_23/231ef856b95f23dddffcf61effcb99e3.jpeg';
  image3 = 'https://cdn.worldvectorlogo.com/logos/aphex-twin.svg';

  constructor() { }

  ngOnInit() {
  }

}