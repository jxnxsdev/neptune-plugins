import{intercept as e,actions as n}from"@neptune";var i=!1,t;function l([a]){let o=a.mediaProduct?.productId;o&&t!==o&&(t=o,i||(n.playbackControls.pause(),n.playbackControls.timeUpdate(0)))}var s=e("playbackControls/MEDIA_PRODUCT_TRANSITION",l);function d(){console.log("Goodbye world!")}export{d as onUnload};
