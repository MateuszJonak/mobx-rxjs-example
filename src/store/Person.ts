import { types, Instance } from "mobx-state-tree";

const Person = types
  .model({
    name: types.optional(types.string, ""),
    age: types.optional(types.number, 0)
  })
  .actions(self => ({
    setName: name => {
      self.name = name;
    }
  }));

export type PersonStore = Instance<typeof Person>;

export default Person;
