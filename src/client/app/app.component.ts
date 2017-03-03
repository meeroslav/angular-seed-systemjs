import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { LocalizeRouterService } from 'localize-router';
import { Router } from '@angular/router';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(router: Router) {
    console.log(router.config);
  }

}
