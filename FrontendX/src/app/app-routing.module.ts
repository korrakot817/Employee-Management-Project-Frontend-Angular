import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { ChatComponent } from './components/chat/chat.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EmployeeUploadFileComponent } from './components/employee-upload-file/employee-upload-file.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { PositionsComponent } from './components/positions/positions.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'activate/:token',
    component: ActivateAccountComponent 
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users/edit',
    component: EditUserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create/employee',
    component: CreateEmployeeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'employee/edit',
    component: EditEmployeeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'employee',
    component: DetailsEmployeeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'positions',
    component: PositionsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'uploadFile',
    component: EmployeeUploadFileComponent,
    canActivate: [AuthGuardService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
