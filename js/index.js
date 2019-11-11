// ฟังก์ชันสำหรับทุนที่หนึ่ง

		function content1() {
			document.getElementById("audio1").play();
			document.getElementById("image1").style.display = "none";
			document.getElementById("alpha1").style.display = "none";
			document.getElementById("image2").style.display = "block";
			setTimeout(function(){ document.getElementById("image3").style.display = "block"; }, 500);
		}

		function content2() {
			document.getElementById("audio1").pause();
			document.getElementById("image4").style.display = "block";
			document.getElementById("alpha2").style.display = "block";
			document.getElementById("image2").style.display = "none";
			document.getElementById("image3").style.display = "none";
		}

		function content3() {
			document.getElementById("image4").style.display = "none";
			document.getElementById("alpha2").style.display = "none";
			document.getElementById("image5").style.display = "block";
		}

		function content4() {
			document.getElementById("audio2").play();
			document.getElementById("image5").style.display = "none";
			document.getElementById("image6").style.display = "block";
			document.getElementById("image7").style.display = "block";
		}

		function content5() {
			document.getElementById("audio2").pause();
			document.getElementById("image7").style.display = "none";
			document.getElementById("image6").style.display = "none";
			document.getElementById("image8").style.display = "block";
			document.getElementById("alpha3").style.display = "block";
		}

		// ฟังก์ชันสำหรับทุนที่สอง
		function content6() {
			document.getElementById("image8").style.display = "none";
			setTimeout(function(){ 
				document.getElementById("image9").style.display = "block";
				document.getElementById("audio3").play();
			}, 500);
		}

		function content7() {
			document.getElementById("audio3").pause();
			document.getElementById("image10").style.display = "block";
			document.getElementById("image9").style.display = "none";
		}

		function content8() {
			document.getElementById("image10").style.display = "none";
			document.getElementById("alpha3").style.display = "none";
			document.getElementById("image11").style.display = "block";
			document.getElementById("image12").style.display = "block";
			document.getElementById("image13").style.display = "block";
			document.getElementById("alpha4").style.display = "block";
			document.getElementById("alpha5").style.display = "block";
		}

		// ฟังก์ชันสำหรับทุนที่สาม

		function content9() {
			document.getElementById("audio4").play();
			document.getElementById("image11").style.display = "none";
			document.getElementById("image12").style.display = "none";
			document.getElementById("image13").style.display = "none";
			document.getElementById("image14").style.display = "block";
			document.getElementById("image15").style.display = "block";
			document.getElementById("image16").style.display = "block";
		}

		function content10() {
			document.getElementById("audio4").pause();
			document.getElementById("image14").style.display = "none";
			document.getElementById("image15").style.display = "none";
			document.getElementById("image16").style.display = "none";
			document.getElementById("image17").style.display = "block";
			document.getElementById("image18").style.display = "block";
			document.getElementById("image19").style.display = "block";
		}

		// ฟังก์ชันสำหรับทุนที่สี่

		function content11() {
			document.getElementById("image17").style.display = "none";
			document.getElementById("image18").style.display = "none";
			document.getElementById("image19").style.display = "none";
			document.getElementById("alpha4").style.display = "none";
			document.getElementById("alpha5").style.display = "none";
			document.getElementById("image20").style.display = "block";
			document.getElementById("alpha6").style.display = "block";
			document.getElementById("alpha7").style.display = "block";
		}

		function content12() {
			document.getElementById("audio5").play();
			document.getElementById("image20").style.display = "none";
			document.getElementById("image21").style.display = "block";
			document.getElementById("image22").style.display = "block";
			setTimeout(function(){ document.getElementById("image23").style.display = "block"; }, 250);
			setTimeout(function(){ document.getElementById("image21").style.display = "none"; }, 500);
		}

		function content13() {
			document.getElementById("audio5").pause();
			document.getElementById("image22").style.display = "none";
			document.getElementById("image21").style.display = "block";
			setTimeout(function(){ document.getElementById("image24").style.display = "block"; }, 250);
			setTimeout(function(){ document.getElementById("image21").style.display = "none"; }, 500);
		}

		// ฟังก์ชันสำหรับทุนที่ห้า

		function content14() {
			document.getElementById("image24").style.display = "none";
			document.getElementById("image23").style.display = "none";
			document.getElementById("alpha6").style.display = "none";
			document.getElementById("alpha7").style.display = "none";
			setTimeout(function(){ document.getElementById("image25").style.display = "block"; }, 250);
			setTimeout(function(){ document.getElementById("image26").style.display = "block"; }, 350);
			setTimeout(function(){ document.getElementById("image27").style.display = "block"; }, 450);
		}

		function content15() {
			document.getElementById("audio6").play();
			document.getElementById("image25").style.display = "none";
			document.getElementById("image26").style.display = "none";
			document.getElementById("image27").style.display = "none";
			document.getElementById("image28").style.display = "block";
			document.getElementById("image29").style.display = "block";
			document.getElementById("image30").style.display = "block";
			document.getElementById("image31").style.display = "block";
			document.getElementById("image32").style.display = "block";
		}

		function content16() {
			document.getElementById("audio6").pause();
			document.getElementById("image28").style.display = "none";
			document.getElementById("image29").style.display = "none";
			document.getElementById("image30").style.display = "none";
			document.getElementById("image31").style.display = "none";
			document.getElementById("image32").style.display = "none";
			document.getElementById("image33").style.display = "block";
			document.getElementById("image34").style.display = "block";
			document.getElementById("image35").style.display = "block";
		}

		// ฟังก์ชันสำหรับทุนที่หก


		function content17() {
			setTimeout(function(){ document.getElementById("image35").style.display = "none"; }, 500);
			setTimeout(function(){ document.getElementById("image34").style.display = "none"; }, 1000);
			setTimeout(function(){ document.getElementById("image33").style.display = "none"; }, 1500);
			setTimeout(function(){ 
				document.getElementById("image36").style.display = "block"; 
				document.getElementById("image37").style.display = "block"; 
			}, 2000);
		}

		function content18() {
			document.getElementById("image36").style.display = "none";
			document.getElementById("image37").style.display = "none";
			document.getElementById("image39").style.display = "block";
			document.getElementById("audio7").play();
			setTimeout(function(){ document.getElementById("image38").style.display = "block"; }, 500);
		}

		function content19() {
			document.getElementById("audio7").pause();
			document.getElementById("image38").style.display = "none"
			document.getElementById("image39").style.display = "none"
			document.getElementById("image40").style.display = "block";
			setTimeout(function(){
				document.getElementById("image41").style.display = "block"; 
			}, 500);
		}

		// ฟังก์ชันสำหรับทุนที่เจ็ด

		function content20() {
			document.getElementById("image40").style.display = "none"
			document.getElementById("image41").style.display = "none"
			setTimeout(function(){
				window.location.href = "index2.html";
			}, 500);
		}