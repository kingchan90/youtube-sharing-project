import { Models } from "@rematch/core";
import login from "./login";
import { count } from "./count";
import {video} from "./video";

export interface RootModel extends Models<RootModel> {
  login: typeof login;
  count: typeof count;
  video: typeof video;
}

export const models: RootModel = { login, count, video };