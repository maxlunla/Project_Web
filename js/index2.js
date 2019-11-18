setTimeout(function(){
	document.getElementById("image42").style.display = "block"
	document.getElementById("image43").style.display = "block"
	document.getElementById("image44").style.display = "block"
	document.getElementById("image45").style.display = "block"
}, 500);
setTimeout(function(){
	setTimeout(function(){
		document.getElementById("image43").style.display = "none";
		document.getElementById("image48").style.display = "block";
		document.getElementById("image45").style.display = "none"; 
	}, 500);
	setTimeout(function(){
		document.getElementById("image44").style.display = "none";
		document.getElementById("audio8").play(); 
	}, 1000);
}, 1500);

function content22() {
	setTimeout(function(){
		document.getElementById("image48").style.display = "none";
		document.getElementById("image49").style.display = "block";
		setTimeout(function(){
			document.getElementById("image46").style.display = "block"; 
		}, 500);
		setTimeout(function(){
			document.getElementById("image47").style.display = "block";
			document.getElementById("audio8").pause(); 
		}, 1000);
	}, 500);
	setTimeout(function(){
		document.getElementById("image42").style.display = "none";
		document.getElementById("image46").style.display = "none";
		document.getElementById("image47").style.display = "none";
		document.getElementById("image49").style.display = "none";
		document.getElementById("alpha8").style.display = "none";
		document.getElementById("alpha9").style.display = "none";
		document.getElementById("alpha10").style.display = "none";
		setTimeout(function(){
			 document.getElementById("image50").style.display = "block";
			 document.getElementById("image51").style.display = "block";
		}, 500);
	}, 2500);
	setTimeout(function(){
		document.getElementById("image51").style.display = "none";
		document.getElementById("image51").style.display = "none";
		document.getElementById("image52").style.display = "block";
		setTimeout(function(){
			document.getElementById("image53").style.display = "block";
			document.getElementById("audio9").play();
		}, 500);
	}, 3500);
}

function content25() {
	setTimeout(function(){
		document.getElementById("image52").style.display = "none";
		document.getElementById("image53").style.display = "none";
		document.getElementById("image54").style.display = "block";
		setTimeout(function(){
			document.getElementById("audio9").pause();
			document.getElementById("image55").style.display = "block";
		}, 500);
	}, 500);
	setTimeout(function(){
		document.getElementById("image50").style.display = "none";
		document.getElementById("image54").style.display = "none";
		document.getElementById("image55").style.display = "none";
		setTimeout(function(){
			document.getElementById("image56").style.display = "block";
			document.getElementById("image57").style.display = "block";
			document.getElementById("image58").style.display = "block";
		}, 500);
		setTimeout(function(){
			document.getElementById("image57").style.display = "none";
		}, 1000);
		setTimeout(function(){
			document.getElementById("image56").style.display = "none";
			document.getElementById("audio10").play();
		}, 1500);
	}, 1500);
}

function content27() {
	setTimeout(function(){
		setTimeout(function(){
			document.getElementById("image56").style.display = "block";
		}, 250);
		setTimeout(function(){
			document.getElementById("image57").style.display = "block";
		}, 500);
		setTimeout(function(){
			document.getElementById("image59").style.display = "block";
		}, 750);
		setTimeout(function(){
			document.getElementById("image56").style.display = "none";
			document.getElementById("image57").style.display = "none";
			document.getElementById("image58").style.display = "none";
			document.getElementById("image59").style.display = "none";
			document.getElementById("audio10").pause();
		}, 1000);
		setTimeout(function(){
			document.getElementById("image60").style.display = "block";
			document.getElementById("image61").style.display = "block";
			document.getElementById("image62").style.display = "block";
			document.getElementById("image63").style.display = "block";
			document.getElementById("alpha11").style.display = "block";
			document.getElementById("alpha12").style.display = "block";
		}, 1500);
	}, 500);
	setTimeout(function(){
			setTimeout(function(){
				document.getElementById("image63").style.display = "none";
			}, 250);
			setTimeout(function(){
				document.getElementById("image62").style.display = "none";
			}, 500);
			setTimeout(function(){
				document.getElementById("image61").style.display = "none";
			}, 750);
			setTimeout(function(){
				document.getElementById("alpha12").style.display = "none";
			}, 1000);
			setTimeout(function(){
				document.getElementById("alpha11").style.display = "none";
				document.getElementById("image60").style.display = "none";
				document.getElementById("image64").style.display = "block";
				document.getElementById("audio11").play();
			}, 1250);
	}, 2500);
}

function content29() {
	setTimeout(function(){
		setTimeout(function(){
			document.getElementById("alpha11").style.display = "block";
		}, 250);
		setTimeout(function(){
			document.getElementById("alpha12").style.display = "block";
		}, 500);
		setTimeout(function(){
			document.getElementById("image61").style.display = "block";
		}, 750);
		setTimeout(function(){
			document.getElementById("image62").style.display = "block";
		}, 1000);
		setTimeout(function(){
			document.getElementById("image63").style.display = "block";
		}, 1250);
		setTimeout(function(){
			document.body.style.opacity = "0";
		}, 1500);
		setTimeout(function(){
			document.getElementById("image61").style.display = "none";
			document.getElementById("image62").style.display = "none";
			document.getElementById("image63").style.display = "none";
			document.getElementById("image64").style.display = "none";
			document.getElementById("alpha11").style.display = "none";
			document.getElementById("alpha12").style.display = "none";
			document.getElementById("box1").style.display = "none";
			document.getElementById("box2").style.display = "none";
			document.getElementById("visual").style.display = "none";
			document.getElementById("close").style.display = "none";
			document.getElementById("black").style.display = "none";
			document.getElementById("image65").style.display = "block";
			document.getElementById("image66").style.display = "block";
		}, 4500);
		setTimeout(function(){
			document.body.style.opacity = "100";
			document.getElementById("audio11").pause();
		}, 4750);
		setTimeout(function(){
			window.location.href = "home.html";
		}, 10750);		
	}, 500);
}