setTimeout(function() { 
	document.getElementById("image1").style.display = "none";
	document.getElementById("alpha1").style.display = "none";
	document.getElementById("image2").style.display = "block";
}, 500);
setTimeout(function() { 
	document.getElementById("image3").style.display = "block";
	document.getElementById("audio1").play();
}, 1000);


function content2() {
	setTimeout(function() { 
		document.getElementById("audio1").pause();
		document.getElementById("image4").style.display = "block";
		document.getElementById("alpha2").style.display = "block";
		document.getElementById("image2").style.display = "none";
		document.getElementById("image3").style.display = "none";
	}, 500);
	setTimeout(function() { 
		document.getElementById("image4").style.display = "none";
		document.getElementById("alpha2").style.display = "none";
		document.getElementById("image5").style.display = "block";
	}, 1500);
	setTimeout(function() { 
		document.getElementById("audio2").play();
		document.getElementById("image5").style.display = "none";
		document.getElementById("image6").style.display = "block";
		document.getElementById("image7").style.display = "block";
	}, 2500);
}



function content5() {
	setTimeout(function() { 
		document.getElementById("audio2").pause();
		document.getElementById("image7").style.display = "none";
		document.getElementById("image6").style.display = "none";
		document.getElementById("image8").style.display = "block";
		document.getElementById("alpha3").style.display = "block";
	}, 500);
	setTimeout(function() { 
		document.getElementById("image8").style.display = "none";
	}, 1000);
	setTimeout(function() { 
		document.getElementById("image9").style.display = "block";
		document.getElementById("audio3").play();
	}, 1500);
}

function content7() {
	setTimeout(function() { 
		document.getElementById("audio3").pause();
		document.getElementById("image10").style.display = "block";
		document.getElementById("image9").style.display = "none";
	}, 500);
	setTimeout(function() { 
		document.getElementById("image10").style.display = "none";
		document.getElementById("alpha3").style.display = "none";
		document.getElementById("image11").style.display = "block";
		document.getElementById("image12").style.display = "block";
		document.getElementById("image13").style.display = "block";
		document.getElementById("alpha4").style.display = "block";
		document.getElementById("alpha5").style.display = "block";
	}, 1500);
	setTimeout(function() { 
		document.getElementById("audio4").play();
		document.getElementById("image11").style.display = "none";
		document.getElementById("image12").style.display = "none";
		document.getElementById("image13").style.display = "none";
		document.getElementById("image14").style.display = "block";
		document.getElementById("image15").style.display = "block";
		document.getElementById("image16").style.display = "block";
	}, 2500);
}

function content10() {
	setTimeout(function() { 
		document.getElementById("audio4").pause();
		document.getElementById("image14").style.display = "none";
		document.getElementById("image15").style.display = "none";
		document.getElementById("image16").style.display = "none";
		document.getElementById("image17").style.display = "block";
		document.getElementById("image18").style.display = "block";
		document.getElementById("image19").style.display = "block";
	}, 500);
	setTimeout(function() { 
		document.getElementById("image17").style.display = "none";
		document.getElementById("image18").style.display = "none";
		document.getElementById("image19").style.display = "none";
		document.getElementById("alpha4").style.display = "none";
		document.getElementById("alpha5").style.display = "none";
		document.getElementById("image20").style.display = "block";
		document.getElementById("alpha6").style.display = "block";
		document.getElementById("alpha7").style.display = "block";
	}, 1500);
	setTimeout(function() { 
		document.getElementById("audio5").play();
		document.getElementById("image20").style.display = "none";
		document.getElementById("image21").style.display = "block";
		document.getElementById("image22").style.display = "block";
		setTimeout(function(){ document.getElementById("image23").style.display = "block"; }, 250);
		setTimeout(function(){ document.getElementById("image21").style.display = "none"; }, 500);
	}, 2500);
}

function content13() {
	setTimeout(function() { 
		document.getElementById("audio5").pause();
		document.getElementById("image22").style.display = "none";
		document.getElementById("image21").style.display = "block";
		setTimeout(function(){ document.getElementById("image24").style.display = "block"; }, 250);
		setTimeout(function(){ document.getElementById("image21").style.display = "none"; }, 500);
	}, 500);
	setTimeout(function() { 
		document.getElementById("image24").style.display = "none";
		document.getElementById("image23").style.display = "none";
		document.getElementById("alpha6").style.display = "none";
		document.getElementById("alpha7").style.display = "none";
		setTimeout(function(){ document.getElementById("image25").style.display = "block"; }, 250);
		setTimeout(function(){ document.getElementById("image26").style.display = "block"; }, 350);
		setTimeout(function(){ document.getElementById("image27").style.display = "block"; }, 450);
	}, 1500);
	setTimeout(function() { 
		document.getElementById("audio6").play();
		document.getElementById("image25").style.display = "none";
		document.getElementById("image26").style.display = "none";
		document.getElementById("image27").style.display = "none";
		document.getElementById("image28").style.display = "block";
		document.getElementById("image29").style.display = "block";
		document.getElementById("image30").style.display = "block";
		document.getElementById("image31").style.display = "block";
		document.getElementById("image32").style.display = "block";
	}, 2500);
}

function content16() {
	setTimeout(function() { 
		document.getElementById("audio6").pause();
		document.getElementById("image28").style.display = "none";
		document.getElementById("image29").style.display = "none";
		document.getElementById("image30").style.display = "none";
		document.getElementById("image31").style.display = "none";
		document.getElementById("image32").style.display = "none";
		document.getElementById("image33").style.display = "block";
		document.getElementById("image34").style.display = "block";
		document.getElementById("image35").style.display = "block";
	}, 500);
	setTimeout(function() { 
		setTimeout(function(){ document.getElementById("image35").style.display = "none"; }, 250);
		setTimeout(function(){ document.getElementById("image34").style.display = "none"; }, 350);
		setTimeout(function(){ document.getElementById("image33").style.display = "none"; }, 450);
		setTimeout(function(){ 
			document.getElementById("image36").style.display = "block"; 
			document.getElementById("image37").style.display = "block"; 
		}, 1000);
	}, 1500);
	setTimeout(function() { 
		document.getElementById("image36").style.display = "none";
		document.getElementById("image37").style.display = "none";
		document.getElementById("image39").style.display = "block";
		document.getElementById("audio7").play();
		setTimeout(function(){ document.getElementById("image38").style.display = "block"; }, 500);
	}, 3500);
}

function content19() {
	setTimeout(function() { 
		document.getElementById("audio7").pause();
		document.getElementById("image38").style.display = "none"
		document.getElementById("image39").style.display = "none"
		document.getElementById("image40").style.display = "block";
		setTimeout(function(){
			document.getElementById("image41").style.display = "block"; 
		}, 500);
	}, 500);
	setTimeout(function() { 
		document.getElementById("image40").style.display = "none"
		document.getElementById("image41").style.display = "none"
		setTimeout(function(){
			window.location.href = "index2.html";
		}, 500);
	}, 1500);
}