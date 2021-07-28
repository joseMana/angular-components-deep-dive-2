import { Component, OnInit } from '@angular/core';
import { PopularItem } from '../models/populate-item.model';

@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.css']
})
export class PopularItemsComponent implements OnInit {

  constructor() { }

  item1: PopularItem = new PopularItem(
    "assets/images/nike.jpg",
    "Item #1",
    "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.");

  item2: PopularItem = new PopularItem(
    "assets/images/nike.jpg",
    "Item #2",
    "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.");

  item3: PopularItem = new PopularItem(
    "assets/images/nike.jpg",
    "Item #3",
    "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.");

  parentLastClickedItem: PopularItem;

  ngOnInit(): void {
  }

  handleItemClicked(value: PopularItem) {
    this.parentLastClickedItem = value;
    console.log("from parent: " + this.parentLastClickedItem.title);
  }
}
