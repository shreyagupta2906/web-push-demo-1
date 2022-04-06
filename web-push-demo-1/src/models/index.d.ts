import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WebPushSubscriptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class WebPushSubscription {
  readonly id: string;
  readonly topic?: string | null;
  readonly subscription?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WebPushSubscription, WebPushSubscriptionMetaData>);
  static copyOf(source: WebPushSubscription, mutator: (draft: MutableModel<WebPushSubscription, WebPushSubscriptionMetaData>) => MutableModel<WebPushSubscription, WebPushSubscriptionMetaData> | void): WebPushSubscription;
}