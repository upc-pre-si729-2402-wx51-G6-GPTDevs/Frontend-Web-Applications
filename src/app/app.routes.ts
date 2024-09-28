import { Routes } from '@angular/router';
import { BodyCardComponent } from "./public/pages/worker-profile/body-card/body-card.component";
import { BodyCardEmployerComponent } from "./public/pages/employer-profile/body-card-employer/body-card-employer.component";
import { DashboardCardComponent } from "./public/pages/dashboard/dashboard-card/dashboard-card.component";
import { LoginComponent } from './iam/components/login/login.component';
import { RegisterComponent } from './iam/components/register/register.component';
import { WorkDoneComponent } from './work-done/work-done.component';
import { PublishTaskComponent } from './publish-task/publish-task.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile-worker', component: BodyCardComponent, title: 'Perfil del Trabajador' },
  { path: 'profile-employer', component: BodyCardEmployerComponent, title: 'Perfil del Empleador' },
  { path: 'home', component: DashboardCardComponent, title: 'Panel de Control' },
  { path: 'work-history', component: WorkDoneComponent },
  { path: 'task', component: PublishTaskComponent },
];
