const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Blockin%27_Out_the_Scenery

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[142]['The Chill-Out Yurt'],
        choice[142]['The Rations Yurt'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
