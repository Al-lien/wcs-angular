import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { isConnectedGuard } from './core/is-connected.guard';
import { isAdminGuard } from './core/is-admin.guard';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [isAdminGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [isConnectedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
