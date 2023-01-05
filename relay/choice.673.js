const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Putting_Off_Is_Off-Putting

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[673]['Look Under a Pile of Junk'],
        choice[673]['Roll in a Pile of Junk'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
