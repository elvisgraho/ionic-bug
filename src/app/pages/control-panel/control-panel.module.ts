import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ControlPanelComponent } from './control-panel.component';

@NgModule({
  declarations: [ControlPanelComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlPanelComponent,
      },
    ]),
  ],
})
export class ControlPanelModule {}
