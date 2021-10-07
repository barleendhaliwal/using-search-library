import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyLibModule, SEARCH_SERVICE_TOKEN} from 'my-lib';
import { ExptComponent } from './expt/expt.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GetRequestService } from './get-request.service';

@NgModule({
  declarations: [
    AppComponent,
    ExptComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,    
  ],
  providers: [{ provide: SEARCH_SERVICE_TOKEN, useExisting: GetRequestService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
