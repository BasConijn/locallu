import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { AppState } from 'app/app.state';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ErrorCode } from 'app/core/errorcode.model';
import { unsubscribe } from 'app/utils';

@Component({
  selector: 'app-error-code-list',
  templateUrl: './error-code-list.component.html',
  styleUrls: ['./error-code-list.component.scss']
})
export class ErrorCodeListComponent implements OnInit, OnDestroy {

  @Select(AppState.errorcodes) errorcodes$: Observable<ErrorCode[]>;
  errorcodes: ErrorCode[] = [];

  subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.errorcodes$.pipe(
        tap(value => console.log(value))
      ).subscribe(
        (value: ErrorCode[]) => this.errorcodes = value)
      );
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptions);
  }

}
