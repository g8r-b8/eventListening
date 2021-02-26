function startup() {
  var el = document.getElementById("canvas");
  el.addEventListener("click", e=>{
    console.log(el+" click!!!")
  }, false);
  el.addEventListener("mouseenter", e=>{
    console.log(el+" mouse enter!!!")
  }, false);
  el.addEventListener("touchstart", e=>{
    console.log("touchstart!!!")
  }, false);
  el.addEventListener("touchend", e=>{
    console.log("touchend!!!")
  }, false);
  el.addEventListener("touchcancel", e=>{
    console.log("touchcancel!!!")
  }, false);
  el.addEventListener("touchmove", e=>{
    console.log("touchmove!!!")
  }, false);
}

document.addEventListener("DOMContentLoaded", startup);
