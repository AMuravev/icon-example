import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy3RoutingModule } from './lazy3-routing.module';
import { Lazy3Component } from './lazy3.component';
import {SvgIconsModule} from '@ngneat/svg-icon';
import {groupFirstIcons} from '../../svg/group-first';
import {grouptwoIcons} from '../../svg/grouptwo';
import {appDino1Icon} from '../../svg/dino-1';
import {appDino2Icon} from '../../svg/dino-2';
import {appDino3Icon} from '../../svg/dino-3';
import {appDino4Icon} from '../../svg/dino-4';
import {appDino5Icon} from '../../svg/dino-5';
import {appDino6Icon} from '../../svg/dino-6';


@NgModule({
  declarations: [
    Lazy3Component
  ],
  imports: [
    CommonModule,
    Lazy3RoutingModule,
    SvgIconsModule.forChild(
      [
        ...groupFirstIcons,
        ...grouptwoIcons,
        appDino1Icon,
        appDino2Icon,
        appDino3Icon,
        appDino4Icon,
        appDino5Icon,
        appDino6Icon
      ]
    )
  ]
})
export class Lazy3Module { }
