import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ContactsControlPanelComponent } from './control-panel.component';

@NgModule({
  declarations: [ContactsControlPanelComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactsControlPanelComponent,
      },
    ]),
  ],
})
export class ContactsControlPanelModule {}
