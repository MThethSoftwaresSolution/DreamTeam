import { Component, ViewChild } from '@angular/core';
import { MainService } from './services/api';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { DateTime } from '@syncfusion/ej2-angular-charts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild("chart") chart: any;
  public chartOptions: any;

  title = 'dream-team-assesment';
  data: Array<any> = [];
  stockchartData: Array<any> = [];
  errorMessage: string = '';
  prices: Array<any> = [];
  arr: Array<any> = [];
  ar: Array<any> = [];
  loading: boolean = false;
  priceCode: string = 'MSFT';
  priceCodeName: string = '';
  
  constructor(private service: MainService) {

   }

  ngOnInit() {
    this.loading = true;
    //Default to MSFT when component is initialized
    this.priceCodeName = 'MSFT';
    this.refresh('MSFT');

  }

  refresh(priceCode: string){

    this.priceCodeName = priceCode;

    this.prices = [];

    this.service.getData(priceCode)
      .subscribe((resp: any) => {
        
        this.data = resp['Time Series (5min)'];
        console.log(this.data);

        const result1 = (Object.keys(this.data) as (keyof typeof this.data)[]).find((key) => {

          this.ar.push(key);

          let a = this.data[key];
          let values = Object.keys(a).map(k => +a[k]);


          const model = {
            x: key,
            y: values
          };
          
          this.prices.push(model);

          this.chartOptions = {
            series: [
              {
                name: "candle",
                data: this.prices
              }
            ],
            chart: {
              type: "candlestick",
              height: 450
            },
            title: {
              text: "Stock Prices",
              align: "left"
            },
            xaxis: {
              type: "datetime"
            },
            yaxis: {
              tooltip: {
                enabled: true
              }
            }
          };

        });

        this.loading = false;


      }, (error:any)=>{
        this.errorMessage = error.error;
        this.loading = false;
      });


  }

}


export interface ChartStockPrices{
  x: DateTime;
  y: Array<number>;
}