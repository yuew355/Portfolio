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
			ham_layers[i].style.backgroundColor = "black";
		}
		toggle = true;
		megaMenu.style.width = "15vw";

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

AOS.init({
  duration: 1200,
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area


      $('html, body').animate({
        scrollTop: $(hash).offset().bottom
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




$(document).ready(function(){
    $("#pro1").mouseover(function(){
        $("#pro1").css("background-color", "yellow");
    });
    $("#pro1").mouseout(function(){
        $("#pro1").css("background-color", "lightgray");
    });
});
