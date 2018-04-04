
function dropRobo (){
    document.getElementById("roboDrop").classList.toggle("show");
	document.getElementById("plcsDrop").classList.remove("show");
	document.getElementById("controlDrop").classList.remove("show");
	document.getElementById("pneumDrop").classList.remove("show");
	document.getElementById("hydrDrop").classList.remove("show");
}
function dropControl (){
    document.getElementById("controlDrop").classList.toggle("show");
	document.getElementById("plcsDrop").classList.remove("show");
	document.getElementById("roboDrop").classList.remove("show");
	document.getElementById("pneumDrop").classList.remove("show");
	document.getElementById("hydrDrop").classList.remove("show");
}
function dropHydr (){
    document.getElementById("hydrDrop").classList.toggle("show");
	document.getElementById("plcsDrop").classList.remove("show");
	document.getElementById("roboDrop").classList.remove("show");
	document.getElementById("pneumDrop").classList.remove("show");
	document.getElementById("controlDrop").classList.remove("show");
}
function dropPlcs (){
    document.getElementById("plcsDrop").classList.toggle("show");
	document.getElementById("hydrDrop").classList.remove("show");
	document.getElementById("roboDrop").classList.remove("show");
	document.getElementById("pneumDrop").classList.remove("show");
	document.getElementById("controlDrop").classList.remove("show");
}
function dropPneum (){
    document.getElementById("pneumDrop").classList.toggle("show");
	document.getElementById("hydrDrop").classList.remove("show");
	document.getElementById("roboDrop").classList.remove("show");
	document.getElementById("plcsDrop").classList.remove("show");
	document.getElementById("controlDrop").classList.remove("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("pneumDrop");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
    if (!e.target.matches('.dropbtn')) {
    var appDrop = document.getElementById("hydrDrop");
      if (appDrop.classList.contains('show')) {
        appDrop.classList.remove('show');
      }
  }
      if (!e.target.matches('.dropbtn')) {
    var appDrop = document.getElementById("roboDrop");
      if (appDrop.classList.contains('show')) {
        appDrop.classList.remove('show');
      }
  }
      if (!e.target.matches('.dropbtn')) {
    var appDrop = document.getElementById("plcsDrop");
      if (appDrop.classList.contains('show')) {
        appDrop.classList.remove('show');
      }
  }
      if (!e.target.matches('.dropbtn')) {
    var appDrop = document.getElementById("controlDrop");
      if (appDrop.classList.contains('show')) {
        appDrop.classList.remove('show');
      }
  }
}


