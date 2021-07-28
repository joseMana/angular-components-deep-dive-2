import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopularItem } from '../models/populate-item.model';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})
export class PopularItemComponent implements OnInit {
  @Input()
  item: PopularItem;

  @Output()
  itemClicked = new EventEmitter<PopularItem>();

  constructor() { }

  ngOnInit(): void {
  }

  public handleButtonClick() {
    console.log("from child: " + this.item.title);
    this.itemClicked.emit(this.item);
  }
}
