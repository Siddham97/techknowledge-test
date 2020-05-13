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
}
