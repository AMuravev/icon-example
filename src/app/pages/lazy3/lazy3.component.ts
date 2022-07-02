import { Component, OnInit } from '@angular/core';
import {SvgIconRegistry} from '@ngneat/svg-icon';

@Component({
  selector: 'app-lazy3',
  templateUrl: './lazy3.component.html'
})
export class Lazy3Component implements OnInit {
  allIcon: Map<string, any>;

  constructor(private service: SvgIconRegistry) { }

  ngOnInit(): void {
    this.allIcon = this.service.getAll();
  }

}
