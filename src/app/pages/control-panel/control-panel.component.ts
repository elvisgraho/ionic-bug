import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  @ViewChild(IonContent, { static: false }) ionContent: IonContent;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToContactsApp() {
    this.router.navigate([`/app-contacts`]);
  }
}
