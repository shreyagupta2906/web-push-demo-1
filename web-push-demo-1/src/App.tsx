import React, { useEffect, useState } from 'react';
import './App.css';
import { PUBLIC_VAPID_KEY } from './common/config';
import Amplify, { API, Auth, Hub } from "aws-amplify";
import * as mutations from './graphql/mutations';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const urlB64ToUint8Array = (base64String: string) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const App = () => {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);

  console.log(user);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(() => console.log("Not signed in"));

    return unsubscribe;
  }, []);


  const subscribe = async (): Promise<void> => {
    console.log("Attempting Subscribe");

    const registration: ServiceWorkerRegistration | undefined = await navigator.serviceWorker.getRegistration();

    if(!registration) return;
    const subscription: PushSubscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(PUBLIC_VAPID_KEY),
    });
    console.log(subscription)

    const webPushSubscriptionDetails = {
      topic: "Test",
      subscription: JSON.stringify(subscription),
    }
    const newSubscription = await API.graphql({ query: mutations.createWebPushSubscription, variables: { input: webPushSubscriptionDetails } });
    console.log(newSubscription)
  }

  return (
    <div>
      <button onClick={subscribe}>Subscribe</button>

      <button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>Open Google</button>
    </div>
  );
}

export default App;
