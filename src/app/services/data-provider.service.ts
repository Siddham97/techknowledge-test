import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { json } from "../constants/Data";

@Injectable({
  providedIn: "root",
})
export class DataProviderService {
  json: any;
  data: any;
  uri: string =
    "https://7u7mg3dblk.execute-api.ap-south-1.amazonaws.com/test/token_ledger_report";

  constructor(private http: HttpClient) {
    this.json = json;
  }

  fetchRecords(interval: String) {
    const headers = { "Content-Type": "application/json" };
    const obj = {
      user_id: 27,
      interval: interval,
    };

    this.http.post(this.uri, obj, { headers: headers }).subscribe((data) => {
      this.data = data;
    });
  }

  processingData() {
    const response = [];

    for (let item of this.json.graph_data) {
      let arr = [];
      let startDate = new Date(item.start_date);
      let endDate = new Date(item.end_date);
      const data = [
        (Math.random() * 1234).toString(),
        "",
        item.resource_name,
        startDate,
        endDate,
        null,
        item.progress,
        null,
      ];
      response.push(data);
    }

    return response;
  }
}
