import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorService} from './core/helper/httpinterceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; 
import { FakeBackendInterceptor } from '@core/helper/fake-backend'; 
@NgModule({
  declarations: [
    AppComponent, 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [RouterModule],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true,
    // },
    
    {
      provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true,
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
