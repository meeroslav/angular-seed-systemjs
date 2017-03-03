import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizeRouterModule } from 'localize-router';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { HomeComponent } from './home/home.component';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '/assets/locales/', '.json');
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
];

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [Http]}
    }),
    LocalizeRouterModule.forRoot(routes),
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule, LocalizeRouterModule, TranslateModule]
})
export class AppRoutingModule { }

