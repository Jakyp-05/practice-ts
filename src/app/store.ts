import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { persistReducer } from "redux-persist";
import getSlice from "features/get/store/slice";
import getSliceId from "features/getId/store/slice";
import cartSlice from "features/cart/store/slice";
import wishlistSlice from "features/wishlist/store/slice";
import commentSlice from "features/comments/store/slice";
import PostSlice from "features/post/store/slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  get: getSlice,
  getId: getSliceId,
  cart: cartSlice,
  wishlist: wishlistSlice,
  comments: commentSlice,
  posts: PostSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

// types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
