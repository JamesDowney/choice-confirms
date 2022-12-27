const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirms")

// https://kol.coldfront.net/thekolwiki/index.php/The_Fast_and_the_Furry-ous

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["Check out the Furry's Figurine Collection"], page_text));
}