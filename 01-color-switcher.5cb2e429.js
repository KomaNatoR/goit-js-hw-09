const t={btnSrart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};t.btnStop.setAttribute("disabled",null);let e=null;function o(t){""===t.target.dataset.start&&(console.log("start"),n(),a(),e=setInterval(a,1e3)),""===t.target.dataset.stop&&(console.log("stop"),n(),clearInterval(e))}function n(){t.btnSrart.toggleAttribute("disabled"),t.btnStop.toggleAttribute("disabled")}function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.btnSrart.addEventListener("click",o),t.btnStop.addEventListener("click",o);
//# sourceMappingURL=01-color-switcher.5cb2e429.js.map