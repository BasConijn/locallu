import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';
import { AppStateModel } from 'app/app.model';
import { ErrorCode } from 'app/core/errorcode.model';
import { Solution } from 'app/core/solution.model';
import errorcodes from './errorcodes.json';
import solutions from './solutions.json';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    errorcodes,
    solutions,
  }
})
@Injectable()
export class AppState {
  @Selector() static errorcodes(state: AppStateModel): ErrorCode[] { return state.errorcodes; }
  @Selector() static solutions(state: AppStateModel): Solution[] { return state.solutions; }
}
