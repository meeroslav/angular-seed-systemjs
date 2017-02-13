import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { TranslateModule } from 'ng2-translate';
import { LocalizeRouterModule } from 'localize-router';

let routes = [
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    TranslateModule,
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, LocalizeRouterModule, TranslateModule]
})
export class AboutRoutingModule { }
