const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')


// https://kol.coldfront.net/thekolwiki/index.php/You_Don%27t_Mess_Around_with_Gym

module.exports.main = function (pageTextEncoded) {
    const pageText =
        choiceOverrideDecodePageText(pageTextEncoded)
const { choice } = require('./choice-confirm/choice_map')
	kol.write(addConfirmation(["Work Out", "Rifle the Gym Bag"], pageText));
}