var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var l=t("iQIUW");const i=document.querySelector(".form");document.querySelector("button");function r(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?(n({position:e,delay:o}),console.log("co to robi?"),console.log({position:e,delay:o})):t({position:e,delay:o})}),o)}))}i.addEventListener("submit",(function(e){e.preventDefault();let o=Number(i.elements.amount.value),n=Number(i.elements.step.value),t=Number(i.elements.delay.value);for(let e=1;e<=o;e++)r(e,t).then((({position:e,delay:o})=>{l.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`),console.log("then"),console.log({position:e,delay:o})})).catch((({position:e,delay:o})=>{l.Notify.failure(`❌Rejected promise ${e} in ${o}ms`)})),t=n+t}));
//# sourceMappingURL=03-promises.ba7439b2.js.map
