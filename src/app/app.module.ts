import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeroComponent} from './hero/hero.component';
import {DemoComponent} from './demo/demo.component';
import {ServicesComponent} from './services/services.component';
import {ServiceCardComponent} from './services/service-card/service-card.component';
import {FeaturesComponent} from './features/features.component';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FooterComponent} from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {NgxMaskModule} from 'ngx-mask';
import {NgxCaptchaModule} from 'ngx-captcha';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
            declarations: [
              AppComponent,
              HeaderComponent,
              HeroComponent,
              DemoComponent,
              ServicesComponent,
              ServiceCardComponent,
              FeaturesComponent,
              ContactComponent,
              FooterComponent
            ],
            imports: [
              NgxCaptchaModule,
              NgxPageScrollCoreModule.forRoot({duration: 500,}),
              NgxMaskModule.forRoot(),
              BrowserModule,
              BrowserAnimationsModule,
              MatToolbarModule,
              MatButtonModule,
              FlexLayoutModule,
              CommonModule,
              MatInputModule,
              MatSelectModule,
              MatRadioModule,
              MatCardModule,
              ReactiveFormsModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatSidenavModule,
              MatListModule,
              FontAwesomeModule,
              ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
              }),

            ],
            providers: [],
            bootstrap: [AppComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA]
          })
export class AppModule {
}
