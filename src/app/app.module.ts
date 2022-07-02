import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import {appDino1Icon} from './svg/dino-1';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgIconsModule.forRoot({
      icons: [appDino1Icon],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
