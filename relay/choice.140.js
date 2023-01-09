const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/The_Thin_Tie-Dyed_Line

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[140]['The Munitions Yurt'],
        choice[140]['The Rations Yurt'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
