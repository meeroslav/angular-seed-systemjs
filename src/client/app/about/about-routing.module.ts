import { NgModule, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';
import { Observable } from 'rxjs/Observable';

// let routes = [
//   { path: '', component: AboutComponent },
//   { path: 'admin', component: AboutComponent }
// ];
let routes = [
  { path: '', component: AboutComponent },
  { path: ':id', component: AboutComponent },
  { path: ':id/admin', component: AboutComponent },
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
  exports: [RouterModule, LocalizeRouterModule, TranslateModule]
})
export class AboutRoutingModule { }
