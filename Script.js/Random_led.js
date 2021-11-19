const element = document.querySelector(".container"),
	// query all .light containers
	lights = document.querySelectorAll(".container .light"),
	dimmer = document.querySelector(".dimmer");

// Random colour generator
// #HEX
function getRandomHEX() {
	var letters = "0123456789ABCDEF",
		value = "#";
	for (var i = 0; i < 6; i++) {
		value += letters[Math.floor(Math.random() * 16)];
	}
	return value;
}

// RGBA()
function getRandomRGBA(alpha) {
	function numbers() {
		var x = Math.floor(Math.random() * 256);
		return x;
	}

	alpha = dimmer.value;

	// Change alpha of RGBA on dimmer change
	dimmer.oninput = () => {
		alpha.innerHTML = this.value;
	};

	return (
		"rgba(" +
		numbers() +
		", " +
		numbers() +
		", " +
		numbers() +
		", " +
		alpha /*.toFixed(1)*/ +
		")"
	);
}

function randomLights() {
	// random colours applied to each light
	lights.forEach(function (self) {
		let color = getRandomRGBA();
		self.style.backgroundColor = color;
		self.style["boxShadow"] =
			"0 0 0 rgba(255,255,255,0.2), 0 20px 100px 8px " +
			color +
			", 0 5px 50px 0 #fff";
	});
}

// button with .lightSwitch
let lightsToggle = document.querySelector(".lightSwitch");

//lights on/off toggle button
lightsToggle.addEventListener("click", () => {
	element.classList.toggle("flash");

	if (lightsToggle.innerHTML === "Lights On!") {
		lightsToggle.innerHTML = "Lights Off.";
	} else {
		lightsToggle.innerHTML = "Lights On!";
	}

	// Trigger random lights at set interval
	let random = setInterval(() => {
		randomLights();

		if (element.classList.contains("flash") === false) {
			clearInterval(random);
			//remove inline styles from all lights
			for (i = 0; i < lights.length; i++) {
				lights[i].removeAttribute("style");
			}
		}
	}, 800);
});
  