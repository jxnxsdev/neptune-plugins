
init();

async function init() {
  console.log("initialising Lyrics Everywhere...");
  
  setInterval(async () => {
    const spans = document.querySelectorAll('span[data-current="true"]');
    const textContainer = document.querySelectorAll('.wave-text-capital-demi');
    if (spans.length > 0 && textContainer.length > 0) {
      textContainer[0].innerHTML = spans[0].innerHTML;
    }
  }, 300)
}


export function onUnload() {
  console.log("Goodbye world!");
}
