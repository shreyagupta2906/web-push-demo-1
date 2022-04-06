/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWebPushSubscription = /* GraphQL */ `
  mutation CreateWebPushSubscription(
    $input: CreateWebPushSubscriptionInput!
    $condition: ModelWebPushSubscriptionConditionInput
  ) {
    createWebPushSubscription(input: $input, condition: $condition) {
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
export const updateWebPushSubscription = /* GraphQL */ `
  mutation UpdateWebPushSubscription(
    $input: UpdateWebPushSubscriptionInput!
    $condition: ModelWebPushSubscriptionConditionInput
  ) {
    updateWebPushSubscription(input: $input, condition: $condition) {
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
export const deleteWebPushSubscription = /* GraphQL */ `
  mutation DeleteWebPushSubscription(
    $input: DeleteWebPushSubscriptionInput!
    $condition: ModelWebPushSubscriptionConditionInput
  ) {
    deleteWebPushSubscription(input: $input, condition: $condition) {
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
