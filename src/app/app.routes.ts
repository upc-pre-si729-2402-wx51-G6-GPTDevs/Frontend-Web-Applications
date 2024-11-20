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
import {EmployerManagementComponent} from "./profiles/components/employer-management/employer-management.component";
import {AddEmployerComponent} from "./profiles/components/add-employer/add-employer.component";
import {DeleteWorkerComponent} from "./profiles/components/delete-worker/delete-worker.component";
import {DeleteEmployerComponent} from "./profiles/components/delete-employer/delete-employer.component";
import {GetAllWorkersComponent} from "./profiles/components/get-all-workers/get-all-workers.component";
import {GetAllEmployersComponent} from "./profiles/components/get-all-employers/get-all-employers.component";
import {UpdateWorkerComponent} from "./profiles/components/update-worker/update-worker.component";
import {UpdateEmployerComponent} from "./profiles/components/update-employer/update-employer.component";


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile-worker', component: BodyCardComponent, title: 'Perfil del Trabajador' },
  { path: 'profile-employer', component: BodyCardEmployerComponent, title: 'Perfil del Empleador' },
  { path: 'home', component: DashboardCardComponent, title: 'Panel de Control' },
  { path: 'work-history', component: WorkDoneComponent },
  { path: 'task', component: PublishTaskComponent },
  { path: 'worker-management', component: WorkerManagementComponent, title: 'Gestión de Trabajadores'},
  { path: 'add-worker', component: AddWorkerComponent, title: 'Agregar trabajador'},
  { path: 'employer-management', component: EmployerManagementComponent, title: 'Gestión de Empleadores'},
  { path: 'add-employer', component: AddEmployerComponent, title: 'Agregar empleador'},
  { path: 'delete-worker', component: DeleteWorkerComponent, title: 'Eliminar Trabajador'},
  { path: 'delete-employer', component: DeleteEmployerComponent, title: 'Eliminar Empleador'},
  { path: 'get-all-workers', component: GetAllWorkersComponent, title: 'Obtener Todos los Trabajadores'},
  { path: 'get-all-employers', component: GetAllEmployersComponent, title: 'Obtener Todos los Empleadores'},
  { path: 'update-worker', component: UpdateWorkerComponent, title: 'Editar Trabajador'},
  { path: 'update-employer', component: UpdateEmployerComponent, title: 'Editar Empleador'},

];
