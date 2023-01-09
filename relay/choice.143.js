const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Catching_Some_Zetas

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[143]['Take the bombs and wreak some havoc'],
        choice[143]['Keep the bombs to use later'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
