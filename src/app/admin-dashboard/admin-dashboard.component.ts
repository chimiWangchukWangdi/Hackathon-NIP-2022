import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  basicData: any;

  basicOptions: any;

  subscription: Subscription;


  constructor() {
  }

  ngOnInit(): void {
    this.basicData = {
      labels: ['Bumthang', 'Chhukha', 'Dagana', 'Gasa', 'Haa', 'Lhuentse', 'Mongar', 'Paro', 'Pema Gatshel', 'Punakha',
                'Samdrup Jongkhar', 'Samtse', 'Sarpang', 'Thimphu', 'Trashigang', 'Trashi Yangtse', 'Trongsa', 'Tsirang',
                'Wangdue Phodrang', 'Zhemgang'],
      datasets: [
        {
          label: 'My dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40, 33, 68, 49, 39, 95, 12, 24, 24, 54, 84, 17, 27, 30]
        },
      ]
    };
  }

  // updateChartOptions() {
  //   if (this.config.dark)
  //     this.applyDarkTheme();
  //   else
  //     this.applyLightTheme();
  // }

  // applyDarkTheme() {
  //   this.basicOptions = {
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: '#ebedef'
  //         }
  //       }
  //     },
  //     scales: {
  //       x: {
  //         ticks: {
  //           color: '#ebedef'
  //         },
  //         grid: {
  //           color: 'rgba(255,255,255,0.2)'
  //         }
  //       },
  //       y: {
  //         ticks: {
  //           color: '#ebedef'
  //         },
  //         grid: {
  //           color: 'rgba(255,255,255,0.2)'
  //         }
  //       }
  //     }
  //   };

    // applyLightTheme()
    // {
    //   this.basicOptions = {
    //     plugins: {
    //       legend: {
    //         labels: {
    //           color: '#495057'
    //         }
    //       }
    //     },
    //     scales: {
    //       x: {
    //         ticks: {
    //           color: '#495057'
    //         },
    //         grid: {
    //           color: '#ebedef'
    //         }
    //       },
    //       y: {
    //         ticks: {
    //           color: '#495057'
    //         },
    //         grid: {
    //           color: '#ebedef'
    //         }
    //       }
    //     }
    //   };
    // }

}
