import { createModel } from "@rematch/core";
import { RootModel } from ".";
interface Video {
  url: string
}
interface VideoState {
  videos: Video[];
}
export const video = createModel<RootModel>()({
  state: {
    videos: []
  } as VideoState,
  reducers: {
    addVideo(state: VideoState, newVideo: Video): VideoState {
      return {
        ...state,
        videos: [...state.videos, newVideo],
      };
    },
  },
});