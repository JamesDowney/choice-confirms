const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/A_Rat%27s_Home...

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = []
    if (kol.numericModifier('spooky damage') >= 20) {
        badChoices = badChoices.concat(choice[515]['Kick over the castle'])
    }

    kol.write(addConfirmation(pageText))
}
