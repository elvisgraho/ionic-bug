import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  NoPreloading,
  ExtraOptions,
} from '@angular/router';
import { HomePage } from './home/home.page';
import { HomePageModule } from './home/home.module';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { ControlPanelModule } from './pages/control-panel/control-panel.module';
import { ContactsControlPanelComponent } from './app-contacts/pages/control-panel/control-panel.component';
import { ContactsControlPanelModule } from './app-contacts/pages/control-panel/control-panel.module';
import { CompanyListModule } from './app-contacts/pages/company-list/company-list.module';
import { CompanyListComponent } from './app-contacts/pages/company-list/company-list.component';

const routingConfiguration: ExtraOptions = {
  preloadingStrategy: NoPreloading,
  paramsInheritanceStrategy: 'always',
  scrollPositionRestoration: 'top',
};

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        component: ControlPanelComponent,
      },
    ],
  },

  {
    path: 'app-contacts',
    component: HomePage,
    children: [
      {
        path: '',
        component: ContactsControlPanelComponent,
      },
      {
        path: 'company-list',
        component: CompanyListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routingConfiguration),
    HomePageModule,
    ControlPanelModule,
    ContactsControlPanelModule,
    CompanyListModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
