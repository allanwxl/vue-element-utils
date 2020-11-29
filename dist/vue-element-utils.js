/*!
 * vue-element-utils.js v0.2.1
 * (c) 2020-2020 ray <782216385@qq.com>
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self)["vue-element-utils"]=t()}(this,(function(){"use strict";var e={bind:function(e,t){e.querySelector(".el-select-dropdown .el-select-dropdown__wrap").addEventListener("scroll",(function(){this.scrollHeight-this.scrollTop<=this.clientHeight&&t.value()}))}},t={bind:function(e){var t=e.querySelector(".el-dialog__header"),n=e.querySelector(".el-dialog");t.style.cssText+=";cursor:move;";var o=n.currentStyle||window.getComputedStyle(n,null),i=document.documentElement.clientWidth,c=document.documentElement.clientHeight,l=t.offsetWidth,r=t.offsetHeight,u=n.offsetHeight;t.onmousedown=function(e){var d,s,a=e.clientX-t.offsetLeft,m=e.clientY-t.offsetTop,f=e.clientX-t.getBoundingClientRect().left,p=l-f,v=e.clientY-n.getBoundingClientRect().top,g=u-v;o.left.includes("%")?(d=+document.body.clientWidth*(+o.left.replace(/\%/g,"")/100),s=+document.body.clientHeight*(+o.top.replace(/\%/g,"")/100)):(d=+o.left.replace(/\px/g,""),s=+o.top.replace(/\px/g,"")),document.onmousemove=function(e){var t=e.clientX-a,o=e.clientY-m;e.clientX<l&&(t=t+f-e.clientX),e.clientX+p>i&&(t-=e.clientX+p-i),e.clientY<r&&(o=o+v-e.clientY),e.clientY+g>c&&(o-=e.clientY+g-c),n.style.left=t+d+"px",n.style.top=o+s+"px"},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}},n={bind:function(e){var t=e.querySelector(".el-dialog"),n=document.createElement("div");n.style="width: 2px; background: inherit; height: 80%; position: absolute; right: 0; top: 0; bottom: 0; margin: auto; z-index: 1; cursor: w-resize;",n.addEventListener("mousedown",(function(n){var o=n.clientX-e.offsetLeft,i=t.offsetWidth;document.onmousemove=function(e){e.preventDefault();var n=e.clientX-o;t.style.width=i+n+"px"},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}),!1),t.appendChild(n)}},o={bind:function(e){var t=e.querySelector(".el-dialog"),n=document.createElement("div");n.style="width: 6px; background: inherit; height: 6px; position: absolute; right: 0; bottom: 0; margin: auto; z-index: 1; cursor: nwse-resize;",n.addEventListener("mousedown",(function(n){var o=n.clientX-e.offsetLeft,i=n.clientY-e.offsetTop,c=t.offsetWidth,l=t.offsetHeight;document.onmousemove=function(e){e.preventDefault();var n=e.clientX-o,r=e.clientY-i;t.style.width=c+n+"px",t.style.height=l+r+"px"},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}),!1),t.appendChild(n)}},i=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},c=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null};function l(e){return new Promise((function(t,n){var o=document.createElement("input");o.setAttribute("readonly","readonly"),o.setAttribute("value",e),document.body.appendChild(o),o.select(),o.setSelectionRange(0,e.length),document.execCommand("copy")?(document.execCommand("copy"),t(e)):n(new Error("复制失败")),document.body.removeChild(o)}))}var r=l,u={bind:function(e,t,n){"success"===t.arg?e._clipboard_success=t.value:"error"===t.arg?e._clipboard_error=t.value:(e._clipboard_message=t.value,i(e,"click",(function(){l(e._clipboard_message).then((function(t){e._clipboard_success(t)})).catch((function(t){e._clipboard_error(t)}))})))},update:function(e,t){"success"===t.arg?e._clipboard_success=t.value:"error"===t.arg?e._clipboard_error=t.value:e._clipboard_message=t.value},unbind:function(e,t){"success"===t.arg?delete e._clipboard_success:"error"===t.arg?delete e._clipboard_error:(delete e._clipboard_message,c(e,"click"))}};return{install:function(i){i.prototype.$clipboard=r,i.directive("clipboard",u),i.directive("el-dialog-drag",t),i.directive("el-dialog-drag-width",n),i.directive("el-dialog-corner",o),i.directive("el-select-scroll",e)}}}));
//# sourceMappingURL=vue-element-utils.js.map
