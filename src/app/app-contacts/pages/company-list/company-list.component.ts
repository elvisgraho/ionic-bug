import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateHome() {
    this.router.navigate([`/home`], {});
  }
}
