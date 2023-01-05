const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Skull,_Skull,_Skull

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[155]['Check behind the first one'],
        choice[155]['Look inside the second one'],
        choice[155]['See what\'s under the third one'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
