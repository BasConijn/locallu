import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { AppState } from 'app/app.state';

import { ErrorCodesComponent } from './error-codes/error-codes.component';
import { AddErrorCodeComponent } from './error-codes/add-error-code/add-error-code.component';
import { ErrorCodeListComponent } from './error-codes/error-code-list/error-code-list.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { RepairsComponent } from './repairs/repairs.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorCodesComponent,
    AddErrorCodeComponent,
    ErrorCodeListComponent,
    SolutionsComponent,
    RepairsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
