import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';
import { AppStateModel } from 'app/app.model';
import * as errorcodes from './errorcodes.json';
import * as solutions from './solutions.json';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    errorcodes,
    solutions,
  }
})
@Injectable()
export class AppState {}
