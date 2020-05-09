import { Component, OnInit } from "@angular/core";
import { DataProviderService } from "src/app/services/data-provider.service";

@Component({
  selector: "app-balance-info",
  templateUrl: "./balance-info.component.html",
  styleUrls: ["./balance-info.component.css"],
})
export class BalanceInfoComponent implements OnInit {
  get data() {
    return this.dataProvider.data;
  }

  constructor(private dataProvider: DataProviderService) {}

  ngOnInit() {}
}
