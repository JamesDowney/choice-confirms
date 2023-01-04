const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirm/choice-confirms");


// https://kol.coldfront.net/thekolwiki/index.php/Sunday_Black_Sunday

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["Attend the Mass", "Dive into the orchestra pit"], page_text));
}