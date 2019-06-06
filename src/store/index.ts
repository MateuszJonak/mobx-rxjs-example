import { createContext } from "react";
import Person, { PersonStore } from "./Person";

export interface AppStore {
  person: PersonStore;
}

export const createStore = (): AppStore => {
  const stores = {
    person: Person.create()
  };

  return stores;
};

export const appStore = createStore();

export const AppContext = createContext(appStore);
