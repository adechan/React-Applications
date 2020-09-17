// setting up the data layer
// 1. so we can have a record of the basker (if we push things into it, we can use it in the checkout page)
// 2. so when we log into the account, we can use this info in the home page

// All this sets up the data layer

import { createContext, useContext, useReducer } from "react";
import React from "react";

//this is creating the empty data layer = Context
export const StateContext = createContext();

// build a provider: so we can wrap this app inside a provider,
// and give access to this data layer that we created
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* children: are refering to the App in this case */}
    {children}
  </StateContext.Provider>
);

// this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);
