//This is a simple JavaScript file that displays a random blog title from the array.
//Leo Adhemar Tan (leoadhemartan.com) August 2014
function RandomTitle(){
	var titleArray = [
		"Leo Adhemar Tan ",
		"Older Anathema ",
		"Harden Oatmeal ",
		"Areal Methadon",
		"A Horned Tamale ",
		"Dethrone A Lama ",
		"A Healed Matron",
		"A Haltered Moan",
		"A Lathered Moan",
		"A Lemonade Hart",
		"A Renamed Loath",
		"A Haled Tonearm",
		"Reload Anthem A ",
		"A Delta Menorah",
		"A Dealt Menorah",
		"A Maned Loather",
		"A Named Loather",
		"A Daemon Halter",
		"A Thermal Anode ",
		"Le Adamant Hero",
		"Armada Heel Not",
		"Ten Hole Armada",
		"The Lone Armada",
		"Torn Meal Ahead",
		"Realm Not Ahead",
		"No Armlet Ahead",
		"Ten Molar Ahead",
		"Moral Net Ahead",
		"Headman At Lore",
		"Alarmed Hate On",
		"Alarmed Heat On",
		"Rho Enamel Data",
		"Lone Data Harem",
		"Hear Melon Data",
		"Hear Lemon Data",
		"Hare Melon Data ",
		"Hare Lemon Data",
		"Lame Heron Data",
		"Lame Honer Data ",
		"Male Heron Data",
		"Manor Heel Data",
		"Roman Heel Data",
		"Ah Lord Manatee",
		"En Tamale Hoard",
		"Tamale Rand Hoe",
];
var arrayCounter = Math.floor((Math.random()*44)+1); //Array count starts at 0, hence my name. Script will display entries from 1 ("Older Anathema ") - 44("Tamale Rand Hoe")
var randomTitle = arrayCounter + ". " + titleArray[arrayCounter];// "44. Tamale Rand Hoe"
document.getElementById("changeTitle").innerHTML = randomTitle;
}