import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAdminGuard } from './core/is-admin.guard';
import { isConnectedGuard } from './core/is-connected.guard';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  // accessible for everyone
  {
    path: 'home',
    component: HomeComponent,
  },
  // accessible for admins only
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [isAdminGuard],
  },
  // accessible for users && admins
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [isConnectedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
