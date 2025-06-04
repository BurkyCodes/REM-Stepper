import {combineReducers} from "redux";
import stepperReducer from "./reducers/stepper.reducer";

const myReducer = combineReducers({
    steppers:stepperReducer
})

export default myReducer

