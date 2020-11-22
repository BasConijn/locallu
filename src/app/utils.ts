import { Subscription } from 'rxjs';

export function unsubscribe(subscriptions: Subscription[]): void {
  for (const subscription of subscriptions) {
    subscription.unsubscribe();
  }
}
