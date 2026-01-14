import { Component } from '@angular/core';
import { DashboardNavbarComponent } from '../../../components/dashboard-navbar/dashboard-navbar.component';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import ApexCharts from 'apexcharts';

@Component({
    selector: 'app-dashboard-index',
    imports: [DashboardNavbarComponent, CommonModule, NgSelectModule],
    templateUrl: './dashboard-index.component.html'
})
export class DashboardIndexComponent {
  cards = [
    {
      icon: 'assets/dashboard-images/icon/icon_12.svg',
      title: 'All Properties',
      value: '1.7k+'
    },
    {
      icon: 'assets/dashboard-images/icon/icon_13.svg',
      title: 'Total Pending',
      value: '03'
    },
    {
      icon: 'assets/dashboard-images/icon/icon_14.svg',
      title: 'Total Views',
      value: '4.8k'
    },
    {
      icon: 'assets/dashboard-images/icon/icon_15.svg',
      title: 'Total Favourites',
      value: '07'
    }
  ];
  options = [
    { value: 0, label: 'Weekly' },
    { value: 1, label: 'Daily' },
    { value: 2, label: 'Monthly' }
  ];
  emails = [
    {
      sender: 'Jenny Rio.',
      date: 'Aug 22',
      subject: 'Work inquiry from google.',
      preview: 'Hello, This is Jenny from google. We’re the largest online platform offer...',
      attachments: [
        { icon: 'assets/dashboard-images/icon/icon_28.svg', fileName: 'details.pdf' }
      ],
      isPrimary: false
    },
    {
      sender: 'Hasan Islam.',
      date: 'May 22',
      subject: 'Product Designer Opportunities',
      preview: 'Hello, Greeting from Uber. Hope you doing great. I am approching to you for..',
      attachments: [],
      isPrimary: true
    },
    {
      sender: 'Jakie Chan',
      date: 'July 22',
      subject: 'Hunting Marketing Specialist',
      preview: 'Hello, This is Jannat from HuntX. We offer business solution to our client..',
      attachments: [],
      isPrimary: false
    }
  ];
  ngOnInit(): void {
    const chartOptions = {
      chart: {
        height: 300,
        type: "bar",  // Change this to bar type
        fontFamily: "Inter, sans-serif",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Current Week",
          data: [50, 100, 200, 170, 250, 275, 280],
        },
      ],
      dataLabels: {
        enabled: false,
      },
      colors: ["#ff6625"],
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Correct x-axis labels
        labels: {
          style: {
            fontSize: "12px",
            cssClass: "apexcharts-xaxis-title",
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            fontSize: "12px",
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
      grid: {
        borderColor: "#e8e8e8",
        strokeDashArray: 7,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        marker: {
          show: true,
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#linechart"), chartOptions);
    chart.render();
  }
}