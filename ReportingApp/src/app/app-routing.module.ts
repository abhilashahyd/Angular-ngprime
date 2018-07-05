import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutes } from './app-routes.enum';
// import { LoginLandingComponent } from './login';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuard, LoggedInGuard } from './core';
//
import { EmployeeComponent } from './employee/employee.component';
import { UtilizationComponent } from './utilization/utilization.component';

const routes: Routes = [
  {
    path: AppRoutes.Base,
    component:  DashboardComponent,// AppLandingComponent,
    // pathMatch: 'prefix',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // children: [{
    //   path: AppRoutes.Base,
    //   pathMatch: 'full',
    //   redirectTo: AppRoutes.Dashboard
    // },
    // {
    //   path: AppRoutes.Dashboard,
    //   // component: HomeComponent
    //   loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    // }, {
    //   path: AppRoutes.Reports,
    //   loadChildren: 'app/modules/reports/reports.module#ReportsModule'
    // }]
  },
  // {
  //   path: AppRoutes.Login,
  //   component: LoginLandingComponent,
  //   canActivate: [LoggedInGuard]
  // },
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'utilization',
    component: UtilizationComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
