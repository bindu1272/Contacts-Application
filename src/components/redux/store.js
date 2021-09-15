import { createStore } from "redux";
import { contactReducers } from "./reducers/contactReducers";

export const store=createStore(contactReducers);