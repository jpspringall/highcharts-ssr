declare var require: any;

import { Component } from "@angular/core";
import ExportingModule from "highcharts/modules/exporting";
import SunsetTheme from "highcharts/themes/sunset.src.js";
import * as Highcharts from "highcharts";

// The modules will work for all charts.
ExportingModule(Highcharts);
SunsetTheme(Highcharts);

Highcharts.setOptions({
  title: {
    style: {
      color: "tomato",
    },
  },
  legend: {
    enabled: false,
  },
});

@Component({
  selector: "app-charts",
  templateUrl: "charts.component.template.html",
  styleUrls: ["./charts.component.css"],
})
export class ChartsComponent {}
