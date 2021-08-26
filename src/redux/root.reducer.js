import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { shopReduce } from "./shop/shop.reduce";

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReduce,
});

export default persistReducer(persistConfig, rootReducer);
