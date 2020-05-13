import { Component, OnInit } from "@angular/core";
import { DataProviderService } from "src/app/services/data-provider.service";
// declare let Highcharts: any;
declare var google: any;

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
    // for (let item of this.json.graph_data) {
    //   var obj = {
    //     start: Number(),
    //     end: Number(),
    //     completed: Number(),
    //     name: "",
    //   };
    //   var startDate = Date.UTC(
    //     new Date(item.start_date).getFullYear(),
    //     new Date(item.start_date).getMonth(),
    //     new Date(item.start_date).getDay()
    //   );
    //   var endDate = Date.UTC(
    //     new Date(item.end_date).getFullYear(),
    //     new Date(item.end_date).getMonth(),
    //     new Date(item.end_date).getDay()
    //   );
    //   obj.start = startDate;
    //   obj.end = endDate;
    //   obj.completed = item.progress / 100;
    //   obj.name = item.resource_name;
    //   this.seriesData.push(obj);
    // }

    // Highcharts.ganttChart("container", {
    //   title: {
    //     text: "Gantt Chart with Navigation",
    //   },

    //   yAxis: {
    //     uniqueNames: true,
    //   },

    //   navigator: {
    //     enabled: true,
    //     liveRedraw: true,
    //     series: {
    //       type: "gantt",
    //       pointPlacement: 0.5,
    //       pointPadding: 0.25,
    //     },
    //     yAxis: {
    //       min: 0,
    //       max: 3,
    //       reversed: true,
    //       categories: [],
    //     },
    //   },
    //   scrollbar: {
    //     enabled: true,
    //   },
    //   rangeSelector: {
    //     enabled: true,
    //     selected: 0,
    //   },

    //   series: [
    //     {
    //       name: "Project 1",
    //       data: [...this.seriesData],
    //     },
    //   ],
    // });
    for (let item of this.json.graph_data) {
      var arr = [];
      var startDate = new Date(item.start_date);
      var endDate = new Date(item.end_date);

      arr.push((Math.random() * 1234).toString());
      arr.push(null);
      arr.push(item.resource_name);
      arr.push(startDate);
      arr.push(endDate);
      arr.push(null);
      arr.push(20);
      arr.push(null);
      this.seriesData.push(arr);
      // this.seriesData = this.seriesData.sort(function (a, b) {
      //   return b[4] - a[4];
      // });
    }

    console.log(this.seriesData);
    this.google.charts.load("current", {
      packages: ["corechart", "table", "gantt"],
    });
    this.google.charts.setOnLoadCallback(this.drawChart.bind(this));
    // this.drawChart();
  }

  drawChart() {
    var data = new this.google.visualization.DataTable();
    data.addColumn("string", "Task ID");
    data.addColumn("string", "Task Name");
    data.addColumn("string", "Resource");
    data.addColumn("date", "Start Date");
    data.addColumn("date", "End Date");
    data.addColumn("number", "Duration");
    data.addColumn("number", "Percent Complete");
    data.addColumn("string", "Dependencies");

    data.addRows(this.seriesData);

    var options = {
      height: 400,
      // width: 800,
      gantt: {
        trackHeight: 30,
      },
    };

    var chart = new google.visualization.Gantt(
      document.getElementById("chart_div")
    );

    chart.draw(data, options);
  }
}
