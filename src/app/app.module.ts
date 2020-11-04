import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { AppState } from 'app/app.state';
import { ErrorCodesComponent } from './error-codes/error-codes.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { RepairsComponent } from './repairs/repairs.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorCodesComponent,
    SolutionsComponent,
    RepairsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
