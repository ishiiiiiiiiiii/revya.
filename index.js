<<<<<<< HEAD
// index.js
import { registerRootComponent } from 'expo';
import App from './App';

// This tells Expo to use App as the root component.
=======
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
>>>>>>> 9c42552bfdb3dda43774128269cd1dc0daca299e
registerRootComponent(App);
