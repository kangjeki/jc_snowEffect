# jc_snowEffect
Simple Snow Effect For Your Web Page

simple to include file

    <script src="js/jc_snowEffect"></script>

Or you can modify effect variable

if you want to change effect 
open jc_snowEffect.js

lock at code on the bottom :

	function Animate() {
		window.requestAnimationFrame(Animate);

		let x = 0;
		while (x < 1) { 					// jumlah snow yang dibuat 
			snowConfig();
			x++;
		}

		divFrame.innerHTML = "";
		bugSnow.forEach(function(snw) {
			if (snw.w < 0) { 				// Hapus Event Snow width = 0
				bugSnow.splice(snw, 1);
			}

			snw.draw();					// Membuat Snow 

			snw.w -= 0.015; 			        // Effect Snow Mengecil
			snw.h -= 0.015;					// Effect Snow Mengecil

			if (snw.t <= (_iH - 5) ) {
				snw.l += 0.5;				// Sisi Sapuan Aangin / kemiringan snow jatuh	
				snw.t += 3;				// Effect Kecepatan Snow Jatuh	
			}
		});
	}

	window.onload = function() {
		Animate();
	}
  
  edit and save the value;
