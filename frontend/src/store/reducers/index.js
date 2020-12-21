import { combineReducers } from "redux";
import reminders from "./reminders";
import reminder from "./reminder";
import filter from "./filter";

export default combineReducers({
  reminders,
  reminder,
  filter,
});
