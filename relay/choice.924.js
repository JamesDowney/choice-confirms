const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirms")

// https://kol.coldfront.net/thekolwiki/index.php/You_Found_Your_Thrill

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	var choices = ["Head toward the buzzing sound"];
	if (kol.availableAmount(kol.Item.get("blackberry galoshes")) > 0) {
		choices = choices.concat(["Visit the cobbler's house"]);
	}
	kol.write(addConfirm(choices, page_text));
}