import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy4RoutingModule } from './lazy4-routing.module';
import { Lazy4Component } from './lazy4.component';
import {SvgIconsModule} from '@ngneat/svg-icon';
// import {groupFirstIcons} from '../../svg/group-first';
import {appDinoGroup14Icon} from '../../svg/group-first/dino-group-1-4';


@NgModule({
  declarations: [
    Lazy4Component
  ],
  imports: [
    CommonModule,
    Lazy4RoutingModule,
    SvgIconsModule.forChild(appDinoGroup14Icon)
  ]
})
export class Lazy4Module { }
