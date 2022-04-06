import { combineReducers } from "redux";
import user from "./modules/user";
import modal from "./modules/modal";
import dropbox from "./modules/dropbox";
export default combineReducers({
  user,
  modal,
  dropbox,
});
