const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/There%27s_No_Ability_Like_Possibility

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[672]['Rifle the Wallet-Purse-Leprechaun'],
        choice[672]['Read the Magazine-Orangutan-lamp'],
    ]
    
    kol.write(addConfirmation(pageText, badChoices))
}
