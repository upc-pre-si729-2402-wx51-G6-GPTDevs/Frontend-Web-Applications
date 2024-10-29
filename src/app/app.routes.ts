import { Routes } from '@angular/router';
import {BodyCardComponent} from "./profiles/pages/worker-profile/body-card/body-card.component";
import { LoginComponent } from './iam/components/login/login.component';
import { RegisterComponent } from './iam/components/register/register.component';
import { WorkDoneComponent } from './work-done/work-done.component';
import { PublishTaskComponent } from './publish-task/publish-task.component';
import {WorkerManagementComponent} from "./profiles/components/worker-management/worker-management.component";
import {AddWorkerComponent} from "./profiles/components/add-worker/add-worker.component";
import {BodyCardEmployerComponent} from "./profiles/pages/employer-profile/body-card-employer/body-card-employer.component";
import {DashboardCardComponent} from "./profiles/pages/dashboard/dashboard-card/dashboard-card.component";


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile-worker', component: BodyCardComponent, title: 'Perfil del Trabajador' },
  { path: 'profile-employer', component: BodyCardEmployerComponent, title: 'Perfil del Empleador' },
  { path: 'home', component: DashboardCardComponent, title: 'Panel de Control' },
  { path: 'work-history', component: WorkDoneComponent },
  { path: 'task', component: PublishTaskComponent },
  { path: 'crud', component: WorkerManagementComponent, title: 'Gestión de Trabajadores'},
  { path: 'add-worker', component: AddWorkerComponent, title: 'Agregar trabajador'}
];
