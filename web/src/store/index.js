import { combineReducers } from "redux";
import user from "./modules/user";
import modal from "./modules/modal";
export default combineReducers({
  user,
  modal,
});
