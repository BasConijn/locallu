import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<string[]>({
  name: 'app',
  defaults: []
})
@Injectable()
export class AppState {}
