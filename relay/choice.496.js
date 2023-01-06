const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Crate_Expectations_(Tavern_Cellar)

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = []
    if (kol.numericModifier('hot damage') >= 20) {
        badChoices = badChoices.concat(choice[496]['Smash the crates'])
    }

    kol.write(addConfirmation(pageText, badChoices))
}
