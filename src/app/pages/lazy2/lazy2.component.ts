import { Component, OnInit } from '@angular/core';
import {SvgIconRegistry} from '@ngneat/svg-icon';

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html'
})
export class Lazy2Component implements OnInit {

  constructor(private service: SvgIconRegistry) { }

  ngOnInit(): void {
    console.log('LAZY2', this.service.getAll());
  }

}
