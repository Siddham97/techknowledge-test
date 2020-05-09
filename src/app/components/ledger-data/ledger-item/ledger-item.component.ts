import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ledger-item",
  templateUrl: "./ledger-item.component.html",
  styleUrls: ["./ledger-item.component.css"],
})
export class LedgerItemComponent implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit() {
    console.log(this.item);
  }
}
