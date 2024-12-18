import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import confirmReducer from "./slice/confirmSlice";
import studyReducer from "./slice/studyReducer";
import parentReducer from "./slice/parentReducer";
import studentReducer from "./slice/studentReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["confirm", "study", "parent", "student"],
};

const rootReducer = combineReducers({
  confirm: confirmReducer,
  study: studyReducer,
  parent: parentReducer,
  student: studentReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
