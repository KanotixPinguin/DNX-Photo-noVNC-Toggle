/* DNX_PHOTO_DESC_TOGGLE_BUTTON_START */
(function(){
  if(window.__dnxPhotoDescToggleBtn) return;
  window.__dnxPhotoDescToggleBtn = true;

  var BTN_ID = "dnx-photo-desc-toggle-btn";
  var STYLE_ID = "dnx-photo-desc-toggle-style";

  function desc(){
    return document.querySelector(".openwebrx-description-container");
  }

  function arrow(){
    return document.querySelector(".openwebrx-rx-details-arrow");
  }

  function isOpen(){
    var c = desc();
    if(!c) return false;
    return c.classList.contains("expanded") && getComputedStyle(c).display !== "none";
  }

  function openDesc(){
    var c = desc();
    if(!c) return;

    c.classList.add("expanded");
    c.style.setProperty("display","block","important");
    c.style.setProperty("visibility","visible","important");
    c.style.setProperty("opacity","1","important");
    c.style.setProperty("max-height","none","important");
    c.style.setProperty("height","auto","important");
    c.style.setProperty("overflow","visible","important");

    var a = arrow();
    if(a){
      a.classList.add("openwebrx-rx-details-arrow--up");
      a.classList.add("openwebrx-rx-details-arrow-up");
      a.classList.remove("openwebrx-rx-details-arrow--down");
      a.classList.remove("openwebrx-rx-details-arrow-down");
    }
  }

  function closeDesc(){
    var c = desc();
    if(!c) return;

    c.classList.remove("expanded");
    c.style.setProperty("display","none","important");
    c.style.setProperty("visibility","hidden","important");
    c.style.setProperty("opacity","0","important");
    c.style.setProperty("max-height","0px","important");
    c.style.setProperty("height","0px","important");
    c.style.setProperty("overflow","hidden","important");

    var a = arrow();
    if(a){
      a.classList.remove("openwebrx-rx-details-arrow--up");
      a.classList.remove("openwebrx-rx-details-arrow-up");
      a.classList.add("openwebrx-rx-details-arrow--down");
      a.classList.add("openwebrx-rx-details-arrow-down");
    }
  }

  function ensureStyle(){
    if(document.getElementById(STYLE_ID)) return;
    var st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent = [
      "#" + BTN_ID + " {",
      "  position:fixed !important;",
      "  top:80px !important;",
      "  right:20px !important;",
      "  z-index:1000600 !important;",
      "  height:30px !important;",
      "  padding:0 12px !important;",
      "  border-radius:999px !important;",
      "  border:1px solid #ffffff !important;",
      "  background:#1414b8 !important;",
      "  color:#ffffff !important;",
      "  font:700 12px/30px 'Segoe UI',sans-serif !important;",
      "  cursor:pointer !important;",
      "  box-shadow:0 0 10px rgba(20,20,184,.25) !important;",
      "}",
      "#" + BTN_ID + ".is-closed {",
      "  background:#444 !important;",
      "}"
    ].join("\n");
    document.head.appendChild(st);
  }

  function syncBtn(){
    var b = document.getElementById(BTN_ID);
    if(!b) return;
    var open = isOpen();
    b.textContent = open ? "noVNC / Foto aus" : "noVNC / Foto ein";
    b.classList.toggle("is-closed", !open);
  }

  function ensureBtn(){
    ensureStyle();

    var b = document.getElementById(BTN_ID);
    if(b) return b;

    b = document.createElement("button");
    b.id = BTN_ID;
    b.type = "button";
    b.addEventListener("click", function(){
      if(isOpen()) closeDesc();
      else openDesc();
      syncBtn();
    });

    document.body.appendChild(b);
    syncBtn();
    return b;
  }

  function boot(){
    ensureBtn();
    syncBtn();
    setTimeout(syncBtn, 300);
    setTimeout(syncBtn, 1200);
    setTimeout(syncBtn, 2500);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", boot, {once:true});
  } else {
    boot();
  }
  window.addEventListener("load", boot);
})();
/* DNX_PHOTO_DESC_TOGGLE_BUTTON_END */
