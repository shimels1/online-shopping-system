import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Item } from '../Model/item';
import { ItemService } from '../service/item.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  item: Item[] = [];
  subscribe: Subscription;
  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.getAllitems().subscribe(item => {
      this.item = item;
    });
  }


}
