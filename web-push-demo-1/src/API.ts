/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWebPushSubscriptionInput = {
  id?: string | null,
  topic?: string | null,
  subscription?: string | null,
  _version?: number | null,
};

export type ModelWebPushSubscriptionConditionInput = {
  topic?: ModelStringInput | null,
  subscription?: ModelStringInput | null,
  and?: Array< ModelWebPushSubscriptionConditionInput | null > | null,
  or?: Array< ModelWebPushSubscriptionConditionInput | null > | null,
  not?: ModelWebPushSubscriptionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type WebPushSubscription = {
  __typename: "WebPushSubscription",
  id: string,
  topic?: string | null,
  subscription?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateWebPushSubscriptionInput = {
  id: string,
  topic?: string | null,
  subscription?: string | null,
  _version?: number | null,
};

export type DeleteWebPushSubscriptionInput = {
  id: string,
  _version?: number | null,
};

export type ModelWebPushSubscriptionFilterInput = {
  id?: ModelIDInput | null,
  topic?: ModelStringInput | null,
  subscription?: ModelStringInput | null,
  and?: Array< ModelWebPushSubscriptionFilterInput | null > | null,
  or?: Array< ModelWebPushSubscriptionFilterInput | null > | null,
  not?: ModelWebPushSubscriptionFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWebPushSubscriptionConnection = {
  __typename: "ModelWebPushSubscriptionConnection",
  items:  Array<WebPushSubscription | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateWebPushSubscriptionMutationVariables = {
  input: CreateWebPushSubscriptionInput,
  condition?: ModelWebPushSubscriptionConditionInput | null,
};

export type CreateWebPushSubscriptionMutation = {
  createWebPushSubscription?:  {
    __typename: "WebPushSubscription",
    id: string,
    topic?: string | null,
    subscription?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateWebPushSubscriptionMutationVariables = {
  input: UpdateWebPushSubscriptionInput,
  condition?: ModelWebPushSubscriptionConditionInput | null,
};

export type UpdateWebPushSubscriptionMutation = {
  updateWebPushSubscription?:  {
    __typename: "WebPushSubscription",
    id: string,
    topic?: string | null,
    subscription?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteWebPushSubscriptionMutationVariables = {
  input: DeleteWebPushSubscriptionInput,
  condition?: ModelWebPushSubscriptionConditionInput | null,
};

export type DeleteWebPushSubscriptionMutation = {
  deleteWebPushSubscription?:  {
    __typename: "WebPushSubscription",
    id: string,
    topic?: string | null,
    subscription?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetWebPushSubscriptionQueryVariables = {
  id: string,
};

export type GetWebPushSubscriptionQuery = {
  getWebPushSubscription?:  {
    __typename: "WebPushSubscription",
    id: string,
    topic?: string | null,
    subscription?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListWebPushSubscriptionsQueryVariables = {
  filter?: ModelWebPushSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWebPushSubscriptionsQuery = {
  listWebPushSubscriptions?:  {
    __typename: "ModelWebPushSubscriptionConnection",
    items:  Array< {
      __typename: "WebPushSubscription",
      id: string,
      topic?: string | null,
      subscription?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWebPushSubscriptionsQueryVariables = {
  filter?: ModelWebPushSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWebPushSubscriptionsQuery = {
  syncWebPushSubscriptions?:  {
    __typename: "ModelWebPushSubscriptionConnection",
    items:  Array< {
      __typename: "WebPushSubscription",
      id: string,
      topic?: string | null,
      subscription?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateWebPushSubscriptionSubscription = {
  onCreateWebPushSubscription?:  {
    __typename: "WebPushSubscription",
    id: string,
    topic?: string | null,
    subscription?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateWebPushSubscriptionSubscription = {
  onUpdateWebPushSubscription?:  {
    __typename: "WebPushSubscription",
    id: string,
    topic?: string | null,
    subscription?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteWebPushSubscriptionSubscription = {
  onDeleteWebPushSubscription?:  {
    __typename: "WebPushSubscription",
    id: string,
    topic?: string | null,
    subscription?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
