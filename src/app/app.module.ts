import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from '@core/component/footer';
import { HeaderModule } from '@core/component/header';
import { RatingModule } from '@core/component/rating';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { AuthInterceptor, ErrorMessageInterceptor } from '@core/services';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from '@core/guard';
import { IconsModule } from '@core/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HeaderModule,
    FooterModule,
    RatingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzNotificationModule,
    IconsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => '',
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorMessageInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
