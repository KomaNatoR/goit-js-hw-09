!function(){var a={startBtn:document.querySelector("[data-start]"),mainDiv:document.querySelector(".timer")},n=0,t=new Date,e=e("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){n=e[0].getTime(),a.startBtn.disabled=!1,n<t&&(a.startBtn.disabled=!0,alert("Та ти успакойся!!!")),n>t&&alert("Я пишаюсь тобою!!!")}});a.startBtn.addEventListener("click",(function(){a.startBtn.toggleAttribute("disabled"),intervaId=setInterval((function(){t=new Date;var e,s,l,i,d,r,c,o,u,v=n-t;a.mainDiv.innerHTML=(r=v,c=6e4,u=24*(o=36e5),e={days:Math.floor(r/u),hours:Math.floor(r%u/o),minutes:Math.floor(r%u%o/c),seconds:Math.floor(r%u%o%c/1e3)},s=e.days,l=e.hours,i=e.minutes,d=e.seconds,'\n  <div class="field">\n    <span class="value" data-days>'.concat(String(s).length<2?"0"+s:s,'</span>\n    <span class="label">Days</span>\n  </div>\n  <div class="field">\n    <span class="value" data-hours>').concat(String(l).length<2?"0"+l:l,'</span>\n    <span class="label">Hours</span>\n  </div>\n  <div class="field">\n    <span class="value" data-minutes>').concat(String(i).length<2?"0"+i:i,'</span>\n    <span class="label">Minutes</span>\n  </div>\n  <div class="field">\n    <span class="value" data-seconds>').concat(String(d).length<2?"0"+d:d,'</span>\n    <span class="label">Seconds</span>\n  </div>')),v<1e3&&(clearInterval(intervaId),a.startBtn.disabled=!1)}),1e3)}))}();
//# sourceMappingURL=02-timer.ed4297e2.js.map
