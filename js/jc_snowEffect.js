/* --------------------------------------------------------------------------------------------------/
	Project 	: Snow Effect;
	Created 	: JC Programs;
	JS.v 	 	: ES5 Up
----------------------------------------------------------------------------------------------------*/
(function() {
	
	const 	$ 		= document; 
	const 	_iW 		= window.innerWidth,
		_iH 		= window.innerHeight;

	const 	divFrame 	= $.createElement('div');
			divFrame.setAttribute('id', '_snowFrame');
			divFrame.style.cssText = "margin:0; padding:0; overflow:hidden; width: 100%; position: fixed; top:0; left:0; bottom:0; right:0;";
	$.body.prepend(divFrame);

	function Snow(conf) {
		this.l 		= conf.l;
		this.t 		= conf.t;
		this.w 		= conf.w;
		this.h 		= conf.h;

		this.draw 	= function() {
			const 	obj = $.createElement('div');
					obj.style.cssText 	= "background: #fff; margin:0; padding:0; position: absolute; border: 1px #eee solid; border-radius: 50%; z-index:99999;";
					obj.style.left 		= String(this.l) + "px";
					obj.style.top 		= String(this.t) + "px";
					obj.style.width 	= String(this.w) + "px";
					obj.style.height 	= String(this.h) + "px"

			divFrame.appendChild(obj);
		}
	}

	let t = 0, w = 5, h = 5;
	let bugSnow = [];

	function snowConfig() {
		let l 	= Math.floor( (Math.random() * _iW) - 100 ) + 1;
		let snow = new Snow({
			l 	: l,
			t 	: t,
			w 	: w,
			h 	: h
		});
		bugSnow.push(snow);
	}

	// Animate Setting -----------------------------------------------------------------------------
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

			snw.draw();						// Membuat Snow 

			snw.w -= 0.015; 				// Effect Snow Mengecil
			snw.h -= 0.015;					// Effect Snow Mengecil

			if (snw.t <= (_iH - 5) ) {
				snw.l += 0.5;				// Sisi Sapuan Aangin / kemiringan snow jatuh	
				snw.t += 3;					// Effect Kecepatan Snow Jatuh	
			}
		});
	}

	window.onload = function() {
		Animate();
	}
}());
