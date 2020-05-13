import { Component, OnInit } from "@angular/core";
import { DataProviderService } from "src/app/services/data-provider.service";
declare let google: any;

@Component({
  selector: "app-range-bar-chart",
  templateUrl: "./range-bar-chart.component.html",
  styleUrls: ["./range-bar-chart.component.css"],
})
export class RangeBarChartComponent implements OnInit {
  private google: any;
  get json() {
    return this.dataProvider.json;
  }

  seriesData = [];
  constructor(private dataProvider: DataProviderService) {
    this.google = google;
  }

  ngOnInit() {
    this.processingData();
  }

  processingData() {
    for (let item of this.json.graph_data) {
      let arr = [];
      let startDate = new Date(item.start_date);
      let endDate = new Date(item.end_date);

      arr.push((Math.random() * 1234).toString());
      arr.push(null);
      arr.push(item.resource_name);
      arr.push(startDate);
      arr.push(endDate);
      arr.push(null);
      arr.push(parseInt(item.progress));
      arr.push(null);
      this.seriesData.push(arr);
    }

    console.log(this.seriesData);
    this.google.charts.load("current", {
      packages: ["corechart", "table", "gantt"],
    });
    this.google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart() {
    let data = new this.google.visualization.DataTable();
    data.addColumn("string", "Task ID");
    data.addColumn("string", "Task Name");
    data.addColumn("string", "Resource");
    data.addColumn("date", "Start Date");
    data.addColumn("date", "End Date");
    data.addColumn("number", "Duration");
    data.addColumn("number", "Percent Complete");
    data.addColumn("string", "Dependencies");

    data.addRows(this.seriesData);

    let options = {
      height: 400,
      width: 800,
      gantt: {
        trackHeight: 30,
      },
    };

    let chart = new google.visualization.Gantt(
      document.getElementById("chart_div")
    );

    chart.draw(data, options);
  }
}
