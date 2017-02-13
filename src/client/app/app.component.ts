import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';
import { LocalizeRouterService } from 'localize-router';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(localize: LocalizeRouterService) {
    console.log('Environment config', Config);
    console.log('Localize', localize.parser.routes);
  }
}
