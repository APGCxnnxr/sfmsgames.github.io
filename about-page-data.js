// This holds all of the color themes for light/dark mode
export const modes = [
	{
		mode: "light",
		properties: {
			"--text-color": "rgba(0, 0, 0, 0.6)",
			"--body-background-gradient": "linear-gradient(30deg, #b3e5fc, #ffcc80)",
			"--blob-1-gradient": "linear-gradient(0deg, #ffcc80, #ffab40)",
			"--blob-2-gradient": "linear-gradient(0deg, #b3e5fc, #4fc3f7)",
			"--blob-3-gradient": "linear-gradient(0deg, #c8e6c9, #81c784)",
			"--link-color": "#7152ff",
		},
	},
	{
		mode: "dark",
		properties: {
			"--text-color": "rgba(255, 255, 255, 0.9)",
			"--body-background-gradient": "linear-gradient(30deg, #010101, #000000)",
			"--blob-1-gradient": "linear-gradient(72deg, #ff2079, #0400eb)",
			"--blob-2-gradient": "linear-gradient(0deg, #440bd4, #e92efb)",
			"--blob-3-gradient": "linear-gradient(220deg, #ff2079, #0400eb)",
			"--link-color": "#9178ff",
		},
	},
];

// All of the updates and their corresponding dates that will be dynamically added in the updates section on about page
export const updates = [
	{ date: "10/4/24", content: "Added zombs royale, we become what we behold, idle lumber inc, idle digging tycoon, bomber royale, and blumgi paintball." },
	{ date: "10/31/24", content: "Added bad egg, cactus mccoy, cactus mccoy 2, territorial.io, and just passing 2." },
	{ date: "10/29/24", content: "Added jacksmith" },
	{ date: "10/24/24", content: "Added pre civilization bronze age" },
	{ date: "10/21/24", content: "Updated login page UI" },
	{ date: "10/20/24", content: "Restored Strongdog chat, added StrongDogXP accounts, Halloween update" },
	{ date: "10/19/24", content: "Added conq.io and shipo.io" },
	{ date: "10/17/24", content: "Added sheep party" },
	{ date: "10/16/24", content: "Added tanko.io and tag" },
	{ date: "10/15/24", content: "Added levil devil, FNF, fixed Run 3 in secret games" },
	{ date: "10/12/24", content: "Added gladdihoppers and more games" },
	{ date: "10/10/24", content: "Cleaned up About page, added grindcraft" },
	{ date: "10/9/24", content: "Added Run 3 and Abandoned to secret games; Pixwar 2 to page 2" },
	{ date: "10/7/24", content: "Added more games to second page" },
	{ date: "10/6/24", content: "Added many new games to second page" },
	{ date: "10/3/24", content: "Fixed eggy car" },
	{ date: "9/20/24", content: "Added block lanschool 2.0 to secret games" },
	{ date: "9/16/24", content: "Fixed Fnaf; removed cirkul bottle giveaway" },
	{ date: "7/27/24", content: "Fixed choppy orc; added new game to secret games; added cirkul bottle giveaway" },
	{ date: "5/16/24", content: "Fixed one hasty shaman game" },
	{ date: "5/15/24", content: "Fixed one trick mage game" },
	{ date: "5/14/24", content: "Removed tabs on page 1; improved About section" },
	{ date: "5/13/24", content: "Optimized top 10 load speed; added loading icons; improved styling" },
	{ date: "5/12/24", content: "Added About section" },
];