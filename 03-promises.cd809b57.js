function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var u=o("eWCmQ");function l(r,t){const n=Math.random()>.3;return new Promise(((o,l)=>{setTimeout((()=>{n?o(e(u).Notify.success(`✅ Fulfilled promise ${r} in ${t}ms`)):l(e(u).Notify.failure(`❌ Rejected promise ${r} in ${t}ms`))}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){e.preventDefault();const r=e.currentTarget.elements.delay.value,t=e.currentTarget.elements.step.value,n=e.currentTarget.elements.amount.value;e.currentTarget.reset();for(let e=0;e<n;e+=1){let n=e+1,o=Number(r)+Number(t)*e;l(n,o).then((e=>e)).catch((e=>e))}}));
//# sourceMappingURL=03-promises.cd809b57.js.map