(()=>{"use strict";const e=(e,t)=>[...(t||document).querySelectorAll(e)],t=(e,t)=>(t||document).querySelector(e);Shopify.queryParams={};!function(){if(location.search.length){const e=location.search.substring(1).split("&");for(let t=0;t<e.length;t++){const n=e[t].split("=");n.length&&(Shopify.queryParams[decodeURIComponent(n[0])]=decodeURIComponent(n[1]))}}}();function n(e,n){const{dataset:r,id:o}=e,l=(({active:e})=>"true"===e)(r);r.active=l?"false":"true",n&&((e,n,r)=>{const o=`overlay--${e}`,l=r.parentNode;if(n)l.removeChild(t(`#${o}`));else{const t=document.createElement("div");t.setAttribute("id",o),t.classList.add("overlay"),l.insertBefore(t,r),a(`#${o}`,`#${e}`,{overlay:!0})}})(o,l,e)}const a=(e,a,r={})=>{const{overlay:o,closeSelector:l}=r;t(e).addEventListener("click",(()=>{n(t(a),o)})),l&&t(l).addEventListener("click",(()=>{n(t(a),o)}))};function r(e,t){const n=Number(e)/100;return t?n.toFixed(2):n}e(".price-in input").forEach((e=>{e.value=r(e.value,!0)}));const o=()=>{const e=document.location.pathname;document.location.href=e};t(".clear-filter-js").addEventListener("change",o),t("#sort-by").addEventListener("change",(({target:e})=>{Shopify.queryParams.sort_by=e.value,location.search=new URLSearchParams(Shopify.queryParams).toString()})),function(){const n=e(".range-in input"),a=e(".price-in input"),o=t(".slider-filter .pro");n.forEach((e=>{a[0].value&&(o.style.left=a[0].value/n[0].max*1e4+"%",o.style.right=100-a[1].value/n[1].max*1e4+"%"),e.addEventListener("input",(e=>{const t=Number(n[0].value),l=Number(n[1].value);l-t<0?"range-min"===e.target.className?n[0].value=r(l-0):n[1].value=r(t+0):(a[0].value=r(t,!0),a[1].value=r(l,!0),o.style.left=t/n[0].max*100+"%",o.style.right=100-l/n[1].max*100+"%")}))}))}(),a("#filter-open","#filter",{overlay:!0}),a(".filter-form__name svg","#filter",{overlay:!0})})();
//# sourceMappingURL=collection.js.map