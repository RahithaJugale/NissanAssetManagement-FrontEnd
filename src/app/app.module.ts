import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { RouterModule } from '@angular/router';

import { AssetsModule } from 'src/app/assets/assets.module';
import { LoginModule } from 'src/app/login/login.module';
import { PurchaseOrderModule } from 'src/app/purchase-order/purchase-order.module';
import { VendorsModule } from 'src/app/vendors/vendors.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import {NgxPaginationModule} from 'ngx-pagination';

import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './login/shared/auth.guard';
import { AuthInterceptor } from 'src/app/shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AssetsModule,
    LoginModule,
    PurchaseOrderModule,
    VendorsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule
    //NgxPaginationModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
