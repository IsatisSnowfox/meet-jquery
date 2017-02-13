/*

Isatis/meet-jquery

scripts/script.js - Gulp tasks

coded by Isatis

started at 13/02/2017

*/
window.addEventListener("load", function() {
  // 1. a with rel=external opens in new window
  let $tabs,
      iCurrentFigure = 0,
      iFigureAmount,
      aFigures;

  const fChangeFigure = function() {
    aFigures[iCurrentFigure].classList.add("hide");
    if(++iCurrentFigure === iFigureAmount) {
      iCurrentFigure = 0;
    }
    aFigures[iCurrentFigure].classList.remove("hide");
  };
  const fHandleTab = function(oEvent) {
    let $elt = oEvent.currentTarget;
    oEvent.preventDefault();
    if($elt.parentNode.classList.contains("active")) {
      return;
    }
    document.querySelector('ul.nav.nav-tabs .active').classList.remove("active");
    $elt.parentNode.classList.add("active");
    document.querySelector('.tab-pane.active').classList.remove("active");
    document.getElementById($elt.getAttribute("data-tab-target")).classList.add("active");
  };
  Array.from(document.querySelectorAll('a[rel*="external"]')).forEach(function($elt) {
    $elt.setAttribute("target", "_new");
  });

  // 2. Handle tabs
  Array.from(document.querySelectorAll('ul.nav.nav-tabs a')).forEach(function($elt) {
    $elt.addEventListener("click", fHandleTab)
  });

  // 3.
  (aFigures = Array.from(document.querySelectorAll("#trombino figure"))).forEach(function($elt, iIndex) {
    if(iIndex > 0) {
      $elt.classList.add("hide");
    }
  });
  iFigureAmount = aFigures.length;
  setInterval(fChangeFigure, 2000);
})
