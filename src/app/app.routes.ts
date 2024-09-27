import { Routes } from '@angular/router';
import {BodyCardComponent} from "./public/pages/worker-profile/body-card/body-card.component";
import {BodyCardEmployerComponent} from "./public/pages/employer-profile/body-card-employer/body-card-employer.component";
import {DashboardCardComponent} from "./public/pages/dashboard/dashboard-card/dashboard-card.component";

export const routes: Routes = [
  { path: 'body-card', component: BodyCardComponent, title: 'Perfil del Trabajador' },
  { path: 'body-card-employer', component: BodyCardEmployerComponent, title: 'Perfil del Empleador' },
  { path: 'dashboard-card', component: DashboardCardComponent, title: 'Panel de Control' },
  { path: '', redirectTo: 'body-card', pathMatch: 'full' },
];
