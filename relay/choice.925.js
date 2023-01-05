const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/The_Blackest_Smith

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[925]['How about a sword?'],
        choice[925]['A shield, maybe?'],
        choice[925]['A helmet, please.'],
        choice[925]['I would like pants.'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
