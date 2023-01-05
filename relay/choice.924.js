const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')


// https://kol.coldfront.net/thekolwiki/index.php/You_Found_Your_Thrill

module.exports.main = function (pageTextEncoded) {
    const pageText =
        choiceOverrideDecodePageText(pageTextEncoded)
const { choice } = require('./choice-confirm/choice_map')
	var choices = ["Head toward the buzzing sound"];
	if (kol.availableAmount(kol.Item.get("blackberry galoshes")) > 0) {
		choices = choices.concat(["Visit the cobbler's house"]);
	}
	kol.write(addConfirmation(choices, pageText));
}