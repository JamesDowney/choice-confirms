const kol = require("kolmafia");
const { addConfirm } = require("./choice-confirms");

// https://kol.coldfront.net/thekolwiki/index.php/Knob_Goblin_BBQ

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["Kiss the chef", "Abscond with some goodies"], page_text));
}