mergeInto(LibraryManager.library, {
  nearCanvas: function (canvas) {
    window.dispatchReactUnityEvent("nearCanvas", canvas);
  },
});
