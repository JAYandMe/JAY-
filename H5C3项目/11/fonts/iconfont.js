(function(window){var svgSprite='<svg><symbol id="icon-zhifubao" viewBox="0 0 1024 1024"><path d="M776.496511 93.672426 238.646773 93.672426c-82.171488 0-149.402705 67.232241-149.402705 149.402705l0 537.849738c0 82.171488 67.232241 149.401682 149.402705 149.401682l537.848715 0c82.171488 0 149.402705-67.230194 149.402705-149.401682l0-537.849738C925.899216 160.903643 858.666976 93.672426 776.496511 93.672426zM776.496511 870.565469 238.646773 870.565469c-49.431829 0-89.641623-40.210817-89.641623-89.6406l0-537.849738c0-49.431829 40.209794-89.642646 89.641623-89.642646l537.848715 0c49.430806 0 89.641623 40.210817 89.641623 89.642646l0 438.898075c-43.565215-30.522154-112.052029-72.863495-222.556818-117.829616 37.087687-68.484767 57.280588-128.042211 59.149145-133.585461l13.07069-37.614689L537.452183 392.94344l0-60.22771 209.162764 0 0-59.759035L537.452183 272.956695l0-89.642646c0 0-28.771277 0-43.332924 0-14.560624 0-15.96153 9.42465-15.96153 11.949146 0 2.523473 0 77.692477 0 77.692477L268.528338 272.955672l0 59.759035 209.629391 0 0 60.22771L298.407855 392.942417l0 59.294454 332.85797 0c-11.263531 27.458375-26.583448 59.2218-45.288462 92.561116-78.042447-24.031323-171.69543-38.956244-235.089249-31.326473-64.167438 7.674796-112.198362 39.875173-131.777279 88.343047-17.056468 42.25436-9.367345 90.925872 20.060895 127.020952 27.970028 34.287921 70.513984 52.553936 120.179127 52.553936 12.94073 0 26.378787-1.223874 40.151465-3.765767 83.425038-15.288195 164.998915-86.896092 213.117842-161.160493 126.524648 43.682895 219.902362 112.13901 253.516948 134.578068l0 29.882588C866.137111 830.354652 825.926294 870.565469 776.496511 870.565469zM553.501718 597.234243c-40.910759 59.616796-107.149369 111.060445-164.766624 121.624035-44.601824 8.081049-82.201164-1.955538-103.253642-27.809369-15.654538-19.200294-19.857257-44.819788-10.957563-66.851571 11.337209-28.070312 40.969087-46.309722 83.455737-51.386344 9.425673-1.136893 19.288299-1.663896 29.515221-1.663896C432.665629 571.147098 500.028852 581.535703 553.501718 597.234243z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)