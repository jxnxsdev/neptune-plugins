import { actions, store, intercept } from "@neptune";


const onLyricsLoaded = intercept(
  "content/LOAD_ITEM_LYRICS",
  ([lyrics]) => {
		console.log(lyrics)
	}
)

/*init();

async function init() {
  console.log("initialising Lyrics Everywhere...");

  store.getState().
  
  setInterval(async () => {
    const spans = document.querySelectorAll('span[data-current="true"]');
    const textContainer = document.querySelectorAll('.wave-text-capital-demi');
    console.log(spans)
    console.log(textContainer)
    if (spans.length > 0 && textContainer.length > 0) {
      textContainer[0].innerHTML = spans[0].innerHTML;
    }
  }, 300)
}*/


export function onUnload() {
  console.log("Goodbye world!");
}
