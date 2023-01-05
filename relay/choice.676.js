const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')


// https://kol.coldfront.net/thekolwiki/index.php/Flavor_of_a_Raver

module.exports.main = function (pageTextEncoded) {
    const pageText =
        choiceOverrideDecodePageText(pageTextEncoded)
const { choice } = require('./choice-confirm/choice_map')
	kol.write(addConfirmation(["Pick a Fight", "Breathe Deeply"], pageText));
}