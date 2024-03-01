import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { HomeComponent } from './components/feature/home/home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { SingleUserComponent } from './pages/single-user/single-user.component';

@NgModule({
  declarations: [AccountHomeComponent, HomeComponent, SingleUserComponent],
  imports: [CommonModule, AccountRoutingModule, SharedComponentsModule],
})
export class AccountModule {}
