import { combineReducers } from "redux";
import user from "./user-reducer";
import auth from "./auth-reducer";
import submission from "./submission-reducer";

const rootReducer = combineReducers({
     auth,
     user,
     submission,
});

export default rootReducer;
