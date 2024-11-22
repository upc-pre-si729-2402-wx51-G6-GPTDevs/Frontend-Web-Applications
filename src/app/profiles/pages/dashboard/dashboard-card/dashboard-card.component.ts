import { Component, OnInit } from '@angular/core';
import {Dashboard} from "../../../models/dashboard";
import {DashboardService} from "../../../services/dashboard.service";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent implements OnInit {
  dashboards: Dashboard[] = [];
  dashboard?: Dashboard;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe({
      next: (data) => {
        this.dashboards = data;
        this.dashboard = this.dashboards[0];
      },
      error: (err) => {
        console.error('Error al cargar dashboard', err);
      },
    });
  }
}
