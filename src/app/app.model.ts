import { ErrorCode } from 'app/core/errorcode.model';
import { Solution } from 'app/core/solution.model';

export class AppStateModel {
  errorcodes: ErrorCode[];
  solutions: Solution[];
}
