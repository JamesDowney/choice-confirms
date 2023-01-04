const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirm/choice-confirm");


// https://kol.coldfront.net/thekolwiki/index.php/The_Horror..._(A-Boo_Peak)

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["Flee the scene"], page_text));
}