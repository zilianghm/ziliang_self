(function () {
  document.addEventListener("click", function () {
    const dom = document.getElementsByClassName("layout__center")[0];
    const list = [...new Set(dom.getElementsByClassName("item"))];
    list.forEach((item) => {
      console.log();
      item.draggable = false;
    });
  });
})();
