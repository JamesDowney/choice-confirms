const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Staring_Down_the_Barrel

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = []
    if (kol.numericModifier('cold damage') >= 20) {
        badChoices = badChoices.concat(choice[513]['Smash the barrel'])
    }

    kol.write(addConfirmation(pageText))
}
