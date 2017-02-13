import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { LocalizeRouterModule } from 'localize-router';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '/assets/locales', '.json');
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes),
  ],
  exports: [RouterModule, LocalizeRouterModule, TranslateModule]
})
export class AppRoutingModule { }

