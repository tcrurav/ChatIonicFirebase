import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBGHJkbNnaIDLqcmaip6pWKqUCoqEkF4FA",
  authDomain: "paralnd-25cf6.firebaseapp.com",
  databaseURL: "https://paralnd-25cf6.firebaseio.com",
  projectId: "paralnd-25cf6",
  storageBucket: "paralnd-25cf6.appspot.com",
  messagingSenderId: "471013716354"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

