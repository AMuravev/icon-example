import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy2RoutingModule } from './lazy2-routing.module';
import { Lazy2Component } from './lazy2.component';
import {SvgIconsModule} from '@ngneat/svg-icon';
import {grouptwoIcons} from '../../svg/grouptwo';


@NgModule({
  declarations: [
    Lazy2Component
  ],
  imports: [
    CommonModule,
    Lazy2RoutingModule,
    SvgIconsModule.forChild(grouptwoIcons)
  ]
})
export class Lazy2Module { }
