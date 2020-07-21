 function toggleNavMenu(){
    var x = document.getElementById("header");
    if (x.className === "collapse-items") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
}