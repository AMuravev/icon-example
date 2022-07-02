import { Component, OnInit } from '@angular/core';
import {SvgIconRegistry} from '@ngneat/svg-icon';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html'
})
export class Lazy1Component implements OnInit {

  constructor(private service: SvgIconRegistry) { }

  ngOnInit(): void {
    console.log('LAZY1', this.service.getAll());
  }

}
