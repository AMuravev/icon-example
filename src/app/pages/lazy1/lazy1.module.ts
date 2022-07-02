import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazy1Component } from './lazy1.component';
import {SvgIconsModule} from '@ngneat/svg-icon';
import {groupFirstIcons} from '../../svg/group-first';


@NgModule({
  declarations: [
    Lazy1Component
  ],
  imports: [
    CommonModule,
    Lazy1RoutingModule,
    SvgIconsModule.forChild(groupFirstIcons)
  ]
})
export class Lazy1Module { }
