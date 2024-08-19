
init();

async function init() {
  console.log("initialising Lyrics Everywhere...");
  
  const spans = document.querySelectorAll('span[data-current="true"]');
    const textContainer = document.querySelectorAll('.playingFrom--bKSHq');
    console.log(spans)
    console.log(textContainer)
    if (spans.length > 0 && textContainer.length > 0) {
      textContainer[0].innerHTML = spans[0].innerHTML;
    }
}


export function onUnload() {
  console.log("Goodbye world!");
}
