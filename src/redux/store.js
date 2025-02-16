import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice/contactSlice";
import { filterReducer } from "./filtersSlice/filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contact-persist",
  version: 1,
  storage,
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
