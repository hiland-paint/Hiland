const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("./images/PHOTO-2024-06-26-21-17-12.jpg")',
		name: "MUJEEB RAHMAN",
		profession: "Royal drive",
		description:
			"Fantastic service throughout, from start to finish. Everything was completed quickly and neatly. We will definitely use your services again and recommend you to others. Thank you!"
	},

	{
		photo:
			"url('./images/PHOTO-2024-06-26-21-17-37.jpg')",
		name: "Adv.Dr.P.KrishnadasGrey",
		profession: "Nehru Group of Institutions",
		description:
			"Great Job! We love the final outcome, and it was done in a timely fashion. The workers were very friendly and professional. We look forward to hiring Hiland Group again."
	},

	{
		photo:
			"url('./images/PHOTO-2024-06-26-21-17-55.jpg')",
		name: "Dr.CP.Bava Haji ",
		profession: "Malabar dental college",
		description:
			"I was looking for high quality and that is what I received.Hiland Group was very impressive with the details. They completed to scope and on time. Perfect!"
	},

	{
		photo:
			"url('./images/PHOTO-2024-06-26-21-18-14.jpg')",
		name: "Niyas km",
		profession: "Am Moters",
		description:
			"I can’t thank you enough for the wonderful painting job you have done. I am so happy that I chose you to complete the job for me. Thanks again!"
	},
	{
		photo:
			"url('./images/PHOTO-2024-06-26-21-18-27.jpg')",
		name: "Dr. Siddique Ahammad ",
		profession: "Eram Group",
		description:
			"I could not have asked for a better outcome. The service is top notch, the painters are very nice and they get the job done quickly. I will definitely use them again."
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 4) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 4;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);



window.addEventListener("resize", () => {
	description.style.height = "100%";
});

// footer

function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}

// footer end