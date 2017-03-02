import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//import the AF2 Module
import { AngularFireModule } from 'angularfire2'

const config = {
    apiKey: "AIzaSyCT0EbCjy5GI8oZVQNFhIrijQz0tbpWM2U",
    authDomain: "af2-lists-81f67.firebaseapp.com",
    databaseURL: "https://af2-lists-81f67.firebaseio.com",
    storageBucket: "af2-lists-81f67.appspot.com",
    messagingSenderId: "253661559649"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
