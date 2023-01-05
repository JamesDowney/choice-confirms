const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/The_Blackberry_Cobbler

module.exports.main = function (pageTextEncoded) {
    const pageText =
        choiceOverrideDecodePageText(pageTextEncoded)
const { choice } = require('./choice-confirm/choice_map')
	var choices = ["Make some slippers", "Make some moccasins", "Make some combat boots"];
	if (kol.availableAmount(kol.Item.get("blackberry galoshes")) > 0) {
		choices = choices.concat(["Make some galoshes"]);
	}
	kol.write(addConfirmation(choices, pageText));
}