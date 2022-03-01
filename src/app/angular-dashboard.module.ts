//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
//import { angularDashboardRoutes } from './angular-dashboard-routes';
import { loadTranslations, SharedService } from '@mdm/core/src/public_api';
import { DomSanitizer } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import {  MatIconRegistry } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularDashboardRoutingModule} from  './angular-dashboard-routes';

export function createTranslateLoader(httpClient: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(httpClient, 'assets/cross-reference/i18n/', '.json');
}

@NgModule({
  declarations: [    
  ],
  imports: [
  //  BrowserModule,
  //  BrowserAnimationsModule,
    AngularDashboardRoutingModule,
   // angularDashboardRoutes,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
      },
      isolate: false,
    }),
    DefaultModule   
  ],
  providers: [],
  bootstrap: []
})
export class AngularDashboardModule { 
 
  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private _translate: TranslateService,
    private _sharedService: SharedService,
  ) {
    iconRegistry.addSvgIcon('preview', domSanitizer.bypassSecurityTrustResourceUrl('./assets/profiles/preview.png'));
    loadTranslations(this._translate, this._sharedService);
  }

 
}
