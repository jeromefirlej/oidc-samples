import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AuthGuardService } from './services/auth-guard.service';

import { AppComponent } from './app.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { CallApiComponent } from './call-api/call-api.component';

@NgModule({
  declarations: [    
    AppComponent,
    ProtectedComponent,
    AuthCallbackComponent,
    CallApiComponent    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
