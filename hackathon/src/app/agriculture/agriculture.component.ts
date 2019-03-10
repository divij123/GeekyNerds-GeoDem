import { Component, OnInit , NgZone , Inject} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { SidebarService } from '../serivce/sidebar.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.css']
})
export class AgricultureComponent implements OnInit {

  constructor(private service: SidebarService, private zone: NgZone, @Inject(DOCUMENT) private document: any) { }

  url = "../assets/json/ragi.json";
  url1 = "../assets/json/maize.json";
  
  columnDefs = [
    { headerName: 'Crop', field: 'Crop', sortable: true, filter: true },
    { headerName: 'Area', field: 'Area', sortable: true, filter: true },
    { headerName: 'Production', field: 'Production', sortable: true, filter: true },
    { headerName: 'State_Name', field: 'State_Name', sortable: true, filter: true },
    { headerName: 'District_Name', field: 'District_Name', sortable: true, filter: true }
  ];

  rowData: any;
  rowData1: any;


  ngOnInit() {
    this.rowData = this.service.getAll(this.url);
    this.rowData1 = this.service.getAll(this.url1);
  }

  private chart: am4charts.XYChart;


  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);
      let data = [
        {
          "Crop": "Ragi",
          "Area": 0.1,
          "Production": 0.08,
          "State_Name": "Goa",
          "District_Name": "NORTH GOA",
          "values": 2
        },
        {
          "Crop": "Ragi",
          "Area": 1265,
          "Production": 363,
          "State_Name": "Bihar",
          "District_Name": "SITAMARHI",
          "values": 2
        }, 
        {
          "Crop": "Ragi",
          "Area": 1272,
          "Production": 1328,
          "State_Name": "Karnataka",
          "District_Name": "HAVERI",
          "values": 2
        },
        {
          "Crop": "Ragi",
          "Area": 1294,
          "Production": 1047,
          "State_Name": "Kerala",
          "District_Name": "PALAKKAD",
          "values": 2
        },
        {
          "Crop": "Ragi",
          "Area": 1529,
          "Production": 2740,
          "State_Name": "Andhra Pradesh",
          "District_Name": "VISAKHAPATANAM",
          "values": 2
        },
        {
          "Crop": "Ragi",
          "Area": 1310,
          "Production": 2558,
          "State_Name": "Tamil Nadu",
          "District_Name": "THIRUVALLUR",
          "values": 2
        },
        {
          "Crop": "Ragi",
          "Area": 1319,
          "Production": 542,
          "State_Name": "Madhya Pradesh",
          "District_Name": "TIKAMGARH",
          "values": 2
        },
        {
          "Crop": "Ragi",
          "Area": 1320,
          "Production": 1145.8,
          "State_Name": "Odisha",
          "District_Name": "GAJAPATI",
          "values": 2
        }
      
      ]

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "State_Name";
      categoryAxis.renderer.minGridDistance = 30;
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      let columnSeries = chart.series.push(new am4charts.ColumnSeries());
      columnSeries.name = "Area";
      columnSeries.dataFields.valueY = "Area";
      columnSeries.dataFields.categoryX = "State_Name";

      columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
      columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
      columnSeries.columns.template.propertyFields.stroke = "stroke";
      columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
      columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
      columnSeries.tooltip.label.textAlign = "middle";

    let lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.name = "Production";
      lineSeries.dataFields.valueY = "Production";
      lineSeries.dataFields.categoryX = "State_Name";

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
