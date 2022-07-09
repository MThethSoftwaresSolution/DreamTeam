import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainService } from './services/api';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { NgApexchartsModule } from "ng-apexcharts";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,ChartAllModule, StockChartAllModule, NgApexchartsModule,
    BrowserModule
  ],
  providers: [MainService, CategoryService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
