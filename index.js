import{a as u,S as f,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="51422130-3e4e47cfb8dd90f1485b7732f",p="https://pixabay.com/api/";async function m(s){const o={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(p,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info">
        <p>❤️ ${e.likes}</p>
        <p>🧿 ${e.views}</p>
        <p>⌨️ ${e.comments}</p>
        <p>💾 ${e.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){c.innerHTML=""}function L(){l.classList.add("visible")}function b(){l.classList.remove("visible")}const w=document.querySelector(".form");w.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search term!"});return}h(),L();try{const e=await m(o);e.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!"}):g(e.hits)}catch(e){n.error({message:"Something went wrong. Please try again later."}),console.error(e)}finally{b()}});
//# sourceMappingURL=index.js.map
