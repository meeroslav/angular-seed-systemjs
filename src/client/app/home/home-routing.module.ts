import { NgModule } from '@angular/core';
import { RouterModule, Route, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';

import { Observable } from 'rxjs/Observable';

let routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    TranslateModule,
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, LocalizeRouterModule, TranslateModule]
})
export class HomeRoutingModule { }
