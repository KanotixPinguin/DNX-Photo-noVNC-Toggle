/* DNX_PHOTO_DESC_TOGGLE_BUTTON_START */
(function(){
  if(window.__dnxPhotoDescToggleBtn) return;
  window.__dnxPhotoDescToggleBtn = true;

  var BTN_ID = "dnx-photo-desc-toggle-btn";
  var STYLE_ID = "dnx-photo-desc-toggle-style";
  var POS_KEY = "dnx.photo.btn.pos.v1";

  function desc(){ return document.querySelector(".openwebrx-description-container"); }
  function arrow(){ return document.querySelector(".openwebrx-rx-details-arrow"); }
  function isOpen(){
    var c = desc();
    return !!(c && c.classList.contains("expanded") && getComputedStyle(c).display !== "none");
  }
  function openDesc(){
    var c = desc(); if(!c) return;
    c.classList.add("expanded");
    c.style.setProperty("display","block","important");
    c.style.setProperty("visibility","visible","important");
    c.style.setProperty("opacity","1","important");
    c.style.setProperty("max-height","none","important");
    c.style.setProperty("height","auto","important");
    c.style.setProperty("overflow","visible","important");
    var a = arrow();
    if(a){
      a.classList.add("openwebrx-rx-details-arrow--up","openwebrx-rx-details-arrow-up");
      a.classList.remove("openwebrx-rx-details-arrow--down","openwebrx-rx-details-arrow-down");
    }
  }
  function closeDesc(){
    var c = desc(); if(!c) return;
    c.classList.remove("expanded");
    c.style.setProperty("display","none","important");
    c.style.setProperty("visibility","hidden","important");
    c.style.setProperty("opacity","0","important");
    c.style.setProperty("max-height","0px","important");
    c.style.setProperty("height","0px","important");
    c.style.setProperty("overflow","hidden","important");
    var a = arrow();
    if(a){
      a.classList.remove("openwebrx-rx-details-arrow--up","openwebrx-rx-details-arrow-up");
      a.classList.add("openwebrx-rx-details-arrow--down","openwebrx-rx-details-arrow-down");
    }
  }
  function loadPos(){
    try{ var p = JSON.parse(localStorage.getItem(POS_KEY) || "null"); if(p && isFinite(p.left) && isFinite(p.top)) return p; }catch(e){}
    return null;
  }
  function savePos(p){
    try{ if(p) localStorage.setItem(POS_KEY, JSON.stringify(p)); else localStorage.removeItem(POS_KEY); }catch(e){}
  }
  function applyPos(b){
    var p = loadPos();
    if(p){
      if(b.parentNode !== document.body) document.body.appendChild(b);
      var maxL = Math.max(4, window.innerWidth - 150), maxT = Math.max(4, window.innerHeight - 36);
      b.style.setProperty("position","fixed","important");
      b.style.setProperty("right","auto","important");
      b.style.setProperty("bottom","auto","important");
      b.style.setProperty("z-index","1000650","important");
      b.style.setProperty("left", Math.max(4, Math.min(maxL, Math.round(p.left))) + "px", "important");
      b.style.setProperty("top", Math.max(4, Math.min(maxT, Math.round(p.top))) + "px", "important");
    } else {
      b.style.removeProperty("left");
      if(!document.getElementById("dnx-line-toggle-box")){
        b.style.setProperty("position","fixed","important");
        b.style.setProperty("top","80px","important");
        b.style.setProperty("right","20px","important");
      }
    }
  }
  function ensureStyle(){
    if(document.getElementById(STYLE_ID)) return;
    var st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent = [
      "#" + BTN_ID + " {",
      "  position:fixed !important;top:80px !important;right:20px !important;z-index:1000600 !important;",
      "  height:30px !important;padding:0 12px !important;border-radius:999px !important;border:1px solid #fff !important;",
      "  background:#1414b8 !important;color:#fff !important;font:700 12px/30px 'Segoe UI',sans-serif !important;",
      "  cursor:grab !important;user-select:none !important;touch-action:none !important;box-shadow:0 0 10px rgba(20,20,184,.25) !important;",
      "}",
      "#" + BTN_ID + ".is-closed { background:#444 !important; }"
    ].join("\n");
    document.head.appendChild(st);
  }
  function syncBtn(){
    var b = document.getElementById(BTN_ID); if(!b) return;
    var open = isOpen();
    b.textContent = open ? "noVNC / Foto aus" : "noVNC / Foto ein";
    b.classList.toggle("is-closed", !open);
  }
  function makeDraggable(b){
    if(b.__dnxDragInit) return; b.__dnxDragInit = true;
    b.title = "Klick = noVNC/Foto ein/aus · Ziehen = Button frei verschieben · Doppelklick = Standardposition";
    var dragging = false, moved = false, sx = 0, sy = 0, ol = 0, ot = 0;
    b.addEventListener("pointerdown", function(e){
      if(e.button !== undefined && e.button !== 0) return;
      dragging = true; moved = false;
      var r = b.getBoundingClientRect(); sx = e.clientX; sy = e.clientY; ol = r.left; ot = r.top;
      b.style.setProperty("cursor","grabbing","important");
      try{ b.setPointerCapture(e.pointerId); }catch(err){}
    });
    b.addEventListener("pointermove", function(e){
      if(!dragging) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if(!moved && Math.abs(dx) + Math.abs(dy) <= 5) return;
      moved = true;
      if(b.parentNode !== document.body) document.body.appendChild(b);
      var nl = Math.max(4, Math.min(window.innerWidth - b.offsetWidth - 4, Math.round(ol + dx)));
      var nt = Math.max(4, Math.min(window.innerHeight - b.offsetHeight - 4, Math.round(ot + dy)));
      b.style.setProperty("position","fixed","important");
      b.style.setProperty("right","auto","important");
      b.style.setProperty("bottom","auto","important");
      b.style.setProperty("z-index","1000650","important");
      b.style.setProperty("left", nl + "px", "important");
      b.style.setProperty("top", nt + "px", "important");
      e.preventDefault();
    });
    function finish(e){
      if(!dragging) return; dragging = false;
      b.style.setProperty("cursor","grab","important");
      try{ if(b.releasePointerCapture) b.releasePointerCapture(e.pointerId); }catch(err){}
      if(moved){
        var r = b.getBoundingClientRect();
        savePos({ left: Math.round(r.left), top: Math.round(r.top) });
        b.dataset.dnxSuppress = "1";
        setTimeout(function(){ delete b.dataset.dnxSuppress; }, 220);
      }
    }
    b.addEventListener("pointerup", finish);
    b.addEventListener("pointercancel", finish);
    b.addEventListener("dblclick", function(e){
      e.preventDefault(); e.stopPropagation(); savePos(null);
      b.style.removeProperty("left");
      b.style.setProperty("top","80px","important");
      b.style.setProperty("right","20px","important");
    });
  }
  function ensureBtn(){
    ensureStyle();
    var b = document.getElementById(BTN_ID);
    if(!b){
      b = document.createElement("button"); b.id = BTN_ID; b.type = "button";
      b.addEventListener("click", function(ev){
        if(b.dataset.dnxSuppress){ ev.preventDefault(); ev.stopPropagation(); return; }
        if(isOpen()) closeDesc(); else openDesc();
        syncBtn();
      });
      document.body.appendChild(b);
    }
    makeDraggable(b); applyPos(b); syncBtn();
    return b;
  }
  function boot(){ ensureBtn(); syncBtn(); setTimeout(syncBtn, 300); setTimeout(syncBtn, 1200); setTimeout(syncBtn, 2500); }
  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, {once:true}); else boot();
  window.addEventListener("load", boot);
})();
/* DNX_PHOTO_DESC_TOGGLE_BUTTON_END */
