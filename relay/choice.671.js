const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirms")

// https://kol.coldfront.net/thekolwiki/index.php/Out_in_the_Open_Source

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["Check the Neckbeard's Giant Cargo Shorts", "Mess with the Computer Equipment"], page_text));
}