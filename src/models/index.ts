import { Models } from "@rematch/core";
import login from "./login";
import { count } from "./count";
export interface RootModel extends Models<RootModel> {
  login: typeof login;
  count: typeof count;
}

export const models: RootModel = { login, count };