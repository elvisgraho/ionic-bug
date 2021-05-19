import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CompanyListComponent } from './company-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyListComponent,
      },
    ]),
  ],
})
export class CompanyListModule {}
