/*

Isatis/meet-jquery

scripts/script.js - Gulp tasks

coded by Isatis

started at 13/02/2017

*/
window.addEventListener("load", function() {
  // 1. a with rel=external opens in new window

  Array.from(document.querySelectorAll('a[rel*="external"]')).forEach(function($elt) {
    $elt.setAttribute("target", "_new");
  });
})
