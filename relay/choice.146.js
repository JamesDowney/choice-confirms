const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Fratacombs

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[146]['Wander this way'],
        choice[146]['Wander that way'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
