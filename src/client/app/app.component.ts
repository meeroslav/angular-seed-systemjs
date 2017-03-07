import { Component } from '@angular/core';
import './operators';
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
    console.log('CONFG', router.config);
  }

}
