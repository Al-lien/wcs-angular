import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';

const routes: Routes = [
  { path: 'home', component: AccountHomeComponent },
  { path: 'home/:username', component: SingleUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
