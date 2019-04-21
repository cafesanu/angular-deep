import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InitService } from './services/init/init.service';
import { SharedModule } from './shared/shared.module';

export function initializeApp(initService: InitService): () => Promise<void> {
  return (): Promise<void> => {
    return initService.init();
  };
}
@NgModule({
  declarations: [ // Components, directives, and pipes
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [ // other modules
    BrowserModule, // common module + additional features only needed when the app starts
    HttpModule, // tslint:disable-line deprecation
    AuthModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [ // services
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
