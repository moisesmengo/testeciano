const debounce=function(e,t,n){let o;return function(...i){const a=this,l=n&&!o;clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(a,i)},t),l&&e.apply(a,i)}},target=document.querySelectorAll("[data-anime]"),animationClass="animate";function animeScroll(){const e=window.pageYOffset+3*window.innerHeight/4;target.forEach(t=>{e>t.offsetTop?t.classList.add(animationClass):t.classList.remove(animationClass)})}animeScroll(),target.length&&window.addEventListener("scroll",debounce(()=>{animeScroll()},200));var controle=!1;window.onscroll=function(){if(!controle){controle=!0,setTimeout(function(){controle=!1},200);for(var e=document.querySelectorAll("img[data-src]"),t=0;t<e.length;t++)e[t].getBoundingClientRect().top<window.innerHeight+3*window.innerHeight/4&&(e[t].src=e[t].getAttribute("data-src"))}},setTimeout(()=>{document.getElementById("video").innerHTML='<video controls width="574" height="322">\n    <source src="assets/video/Vista_Cielo.mp4" type="video/mp4">\n  </video>'},1500);
