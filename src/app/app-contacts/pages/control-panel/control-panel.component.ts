import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ContactsControlPanelComponent implements OnInit {
  @ViewChild(IonContent, { static: false }) ionContent: IonContent;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateCompanyList() {
    this.router.navigate([`/app-contacts/company-list`], {});
  }
}
