import { combineReducers } from "redux";
import reminders from "./reminders";
import reminder from "./reminder";

export default combineReducers({
  reminders,
  reminder
});
