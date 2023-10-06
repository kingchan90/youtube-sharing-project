import { Models } from "@rematch/core";
import login from "./login";
import {video} from "./video";

export interface RootModel extends Models<RootModel> {
  login: typeof login;
  video: typeof video;
}

export const models: RootModel = { login, video };