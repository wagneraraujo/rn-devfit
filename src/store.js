import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Reducers from "./reducers/index";

const persistConfig = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["userReducer"]
  },
  Reducers
);

const store = createStore(persistConfig);
let persistor = persistStore(store);

export { store, persistor };
