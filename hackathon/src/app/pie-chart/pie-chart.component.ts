import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { SidebarService } from '../serivce/sidebar.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private service: SidebarService, private zone: NgZone) { }

  url = "../assets/json/pie_chart.json";
 
  ngOnInit() {
  }

  private chart: am4charts.XYChart;


  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.PieChart);
      let data = [
        {
          "state": "Haryana",
          "production": 501.9
        },
        {
          "state": "Madhya Pradesh",
          "production": 301.9
        },
        {
          "state": "Gujarat",
          "production": 201.1
        },
        {
          "state": "Germany",
          "production": 165.8
        },
        {
          "state": "Maharashtra",
          "production": 139.9
        },
        {
          "state": "Meghalaya",
          "production": 128.3
        },
        {
          "state": "Telangana",
          "production": 99
        },
        {
          "state": "Andhra Pradesh",
          "production": 60
        }];
      chart.dataSource.url = this.url;
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "production";
      pieSeries.dataFields.category = "state";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      chart.data= data;

    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }


}
