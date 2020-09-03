import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  @Input() isFavorite: boolean ;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  myFavorite() {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }

}
