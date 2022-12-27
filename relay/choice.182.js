const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirms")

// https://kol.coldfront.net/thekolwiki/index.php/Random_Lack_of_an_Encounter

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["Check the cargo hold", "Head down to the galley"], page_text));
}