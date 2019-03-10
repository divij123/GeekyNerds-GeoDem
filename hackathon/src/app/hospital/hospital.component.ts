import { Component, OnInit, NgZone, Inject } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { SidebarService } from '../serivce/sidebar.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  constructor(private service: SidebarService, private zone: NgZone, @Inject(DOCUMENT) private document: any) { }
  url = "../assets/json/gurgaon-milk-collector-locations.json";
  columnDefs = [
    { headerName: 'district', field: 'district', sortable: true, filter: true },
    { headerName: 'town', field: 'town', sortable: true, filter: true },
    { headerName: 'sub-district', field: 'sub-district', sortable: true, filter: true },
    { headerName: 'state', field: 'state', sortable: true, filter: true }

  ];

  rowData: any;

  ngOnInit() {
    this.rowData = this.service.getAll(this.url);
  }

  private chart: am4charts.XYChart;


  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      let data = [{
        "year": "2009",
        "income": 23.5,
        "expenses": 21.1
      }, {
        "year": "2010",
        "income": 26.2,
        "expenses": 30.5
      }, {
        "year": "2011",
        "income": 30.1,
        "expenses": 34.9
      }, {
        "year": "2012",
        "income": 29.5,
        "expenses": 31.1
      }, {
        "year": "2013",
        "income": 30.6,
        "expenses": 28.2,
        "lineDash": "5,5",
      }, {
        "year": "2014",
        "income": 34.1,
        "expenses": 32.9,
        "strokeWidth": 1,
        "columnDash": "5,5",
      }];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.minGridDistance = 30;
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      let columnSeries = chart.series.push(new am4charts.ColumnSeries());
      columnSeries.name = "Income";
      columnSeries.dataFields.valueY = "income";
      columnSeries.dataFields.categoryX = "year";

      columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
      columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
      columnSeries.columns.template.propertyFields.stroke = "stroke";
      columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
      columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
      columnSeries.tooltip.label.textAlign = "middle";

      let lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.name = "Expenses";
      lineSeries.dataFields.valueY = "expenses";
      lineSeries.dataFields.categoryX = "year";

      lineSeries.stroke = am4core.color("#fdd400");
      lineSeries.strokeWidth = 3;
      lineSeries.propertyFields.strokeDasharray = "lineDash";
      lineSeries.tooltip.label.textAlign = "middle";

      let bullet = lineSeries.bullets.push(new am4charts.Bullet());
      bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
      bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
      let circle = bullet.createChild(am4core.Circle);
      circle.radius = 4;
      circle.fill = am4core.color("#fff");
      circle.strokeWidth = 3;
      chart.data = data;

    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  goToUrl(url: string): void {
    this.document = window.open(url, '_blank');
  }

}
