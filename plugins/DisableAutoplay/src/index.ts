import { intercept, actions } from "@neptune";

let autoplay: boolean = false;
let prevSong: string | undefined;
let isInitialised: boolean = false;

function onTransition([track]: any[]) {
  const id = (track.mediaProduct as { productId?: string })?.productId;
  if (!id) return;
  if (prevSong === id) return;
  prevSong = id;

  if (!autoplay) {
    actions.playbackControls.pause();
    actions.playbackControls.timeUpdate(0);
  }
}

const unloadTransition = intercept(
	"playbackControls/MEDIA_PRODUCT_TRANSITION",
	onTransition
);


export function onUnload() {
  console.log("Goodbye world!");
}
