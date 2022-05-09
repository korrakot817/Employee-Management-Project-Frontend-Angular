import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';
import { PositionsComponent } from './components/positions/positions.component';
import { EmployeeUploadFileComponent } from './components/employee-upload-file/employee-upload-file.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    ActivateAccountComponent,
    UsersComponent,
    EditUserComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    DetailsEmployeeComponent,
    PositionsComponent,
    EmployeeUploadFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({

      defaultLanguage: 'th',

      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    FormsModule,
  ],
  providers: [
    CookieService,
  {
     provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptorService,
     multi: true
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
