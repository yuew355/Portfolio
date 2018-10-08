var megaMenu = document.getElementById("overlay");
var ham_layers = document.getElementsByClassName("ham-layer");
var toggle = false;
var topBun = document.getElementById("top_bun");
var meat = document.getElementById("meat");
var bottomBun = document.getElementById("bottom_bun");

function toggleHamMenu(){
	if (toggle == false){
		//opens menu

		topBun.style.top = "11px";
		topBun.style.transform = "rotate(45deg)";
		meat.style.opacity = "0";
		bottomBun.style.top = "-11px";
		bottomBun.style.transform = "rotate(-45deg)";
		for(var i = 0; i < ham_layers.length; i++){
			ham_layers[i].style.backgroundColor = "white";
		}
		toggle = true;
		megaMenu.style.width = "25vw";

	}else{
		//close menu
		megaMenu.style.width = "0vw";
		topBun.style.top = "-0.05px";
		topBun.style.transform = "rotate(0deg)";
		bottomBun.style.top = "0.05px";
		bottomBun.style.transform = "rotate(0deg)";
		meat.style.opacity = "100";
		for(var i = 0; i < ham_layers.length; i++){
			ham_layers[i].style.backgroundColor = "#fbe14c";
		}
		toggle = false;
	}
}