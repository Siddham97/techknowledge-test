import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { DataProviderService } from "src/app/services/data-provider.service";

@Component({
  selector: "app-ledger-data",
  templateUrl: "./ledger-data.component.html",
  styleUrls: ["./ledger-data.component.css"],
})
export class LedgerDataComponent implements OnInit {
  get data() {
    return this.dataProvider.data;
  }

  constructor(private dataProvider: DataProviderService) {}

  ngOnInit() {
    this.dataProvider.fetchRecords("month");
  }

  fetchRecords(event) {
    this.dataProvider.fetchRecords(event.target.value);
  }
}
