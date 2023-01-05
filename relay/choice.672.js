const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')


// https://kol.coldfront.net/thekolwiki/index.php/There%27s_No_Ability_Like_Possibility

module.exports.main = function (pageTextEncoded) {
    const pageText =
        choiceOverrideDecodePageText(pageTextEncoded)
const { choice } = require('./choice-confirm/choice_map')
	kol.write(addConfirmation(["Rifle the Wallet-Purse-Leprechaun", "Read the Magazine-Orangutan-lamp"], pageText));
}