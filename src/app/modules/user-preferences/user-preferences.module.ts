import { NgModule } from '@angular/core';
import { ResourceSubscriptionsComponent } from './components/resource-subscriptions/resource-subscriptions.component';
import { SearchFilterDataMarketplaceComponent } from './components/search-filter-data-marketplace/search-filter-data-marketplace.component';
import { SearchSubscriptionsComponent } from './components/search-subscriptions/search-subscriptions.component';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { UserPreferencesGeneralComponent } from './components/user-preferences-general/user-preferences-general.component';
import { UserPreferencesSidebarComponent } from './components/user-preferences-sidebar/user-preferences-sidebar.component';
import { UserPreferencesRoutingModule } from './user-preferences-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ColidIconsModule } from '../colid-icons/colid-icons.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared-module';

@NgModule({
  declarations: [
    ResourceSubscriptionsComponent,
    SearchFilterDataMarketplaceComponent,
    SearchSubscriptionsComponent,
    UserPreferencesComponent,
    UserPreferencesGeneralComponent,
    UserPreferencesSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserPreferencesRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatTooltipModule,
    ColidIconsModule,
    MatButtonModule,
    MatSidenavModule,
    NgxsModule
  ]
})
export class UserPreferencesModule { }
