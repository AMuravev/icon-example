import {Component, OnInit} from '@angular/core';
import {SvgIconRegistry} from '@ngneat/svg-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'icon-example';

  constructor(private service: SvgIconRegistry) { }

  ngOnInit(): void {
    console.log('App', this.service.getAll());
  }

}
