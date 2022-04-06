/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWebPushSubscription = /* GraphQL */ `
  query GetWebPushSubscription($id: ID!) {
    getWebPushSubscription(id: $id) {
      id
      topic
      subscription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWebPushSubscriptions = /* GraphQL */ `
  query ListWebPushSubscriptions(
    $filter: ModelWebPushSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebPushSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        topic
        subscription
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWebPushSubscriptions = /* GraphQL */ `
  query SyncWebPushSubscriptions(
    $filter: ModelWebPushSubscriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWebPushSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        topic
        subscription
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
