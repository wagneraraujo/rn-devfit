import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./src/store";
import { Text } from "react-native";

//import stack

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Text>ola</Text>
    </PersistGate>
  </Provider>
);
