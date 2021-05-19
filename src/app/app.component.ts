import { Component, OnDestroy, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Router } from '@angular/router';
import navigation from '../assets/navigation.json';
const { StatusBar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isNavDisabled: boolean = false;
  public fallbackMenuPages = navigation.navigationPages;

  constructor(private platform: Platform, private router: Router) {
    this.initializeApp();
  }

  ngOnInit() {}

  ngOnDestroy() {}

  initializeApp() {
    //on initialization the app goes to /login
    this.platform.ready().then(async () => {
      StatusBar.setStyle({ style: StatusBarStyle.Dark });
      SplashScreen.hide();

      this.router.navigate(['/home']);
    });
  }
}
