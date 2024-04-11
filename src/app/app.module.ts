import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmitRequestComponent } from './submit-request/submit-request.component';
import { ActiveRequestsComponent } from './active-requests/active-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    SubmitRequestComponent,
    ActiveRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
