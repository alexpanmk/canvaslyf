mergeInto(LibraryManager.library, {
  nearCanvas: function (canvas) {
    var canvasStr = UTF8ToString(canvas);
    window.dispatchReactUnityEvent("nearCanvas", canvasStr);
  },
});
