const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirm/choice-confirm")

// https://kol.coldfront.net/thekolwiki/index.php/The_Blackberry_Cobbler

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	var choices = ["Make some slippers", "Make some moccasins", "Make some combat boots"];
	if (kol.availableAmount(kol.Item.get("blackberry galoshes")) > 0) {
		choices = choices.concat(["Make some galoshes"]);
	}
	kol.write(addConfirm(choices, page_text));
}