import { Component, OnInit } from '@angular/core';
import {SvgIconRegistry} from '@ngneat/svg-icon';

@Component({
  selector: 'app-lazy4',
  templateUrl: './lazy4.component.html'
})
export class Lazy4Component implements OnInit {

  constructor(private service: SvgIconRegistry) { }

  ngOnInit(): void {
    console.log('LAZY4', this.service.getAll());
  }

}
