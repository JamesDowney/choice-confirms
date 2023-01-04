const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirm/choice-confirms");


// https://kol.coldfront.net/thekolwiki/index.php/The_Blackest_Smith

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["How about a sword?", "A shield, maybe?", "A helmet, please.", "I would like pants."], page_text));
}