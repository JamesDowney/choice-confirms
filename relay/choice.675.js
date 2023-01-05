const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Melon_Collie_and_the_Infinite_Lameness

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[675]['End His Suffering'],
        choice[675]['Snag some Candles'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
