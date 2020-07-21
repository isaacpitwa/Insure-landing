 function toggleNavMenu(){
    var x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
      var humburgerBtn = document.getElementById("toggleBtn");
      humburgerBtn.className += " opened"
    } else {
      x.className = "header";
      console.log("Have not Updated header")
    }
}