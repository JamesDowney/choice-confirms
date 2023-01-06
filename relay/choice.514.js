const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/1984_Had_Nothing_on_This_Cellar

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = []
    if (kol.numericModifier('stench damage') >= 20) {
        badChoices = badChoices.concat(choice[514]['Dump out the crate.'])
    }

    kol.write(addConfirmation(pageText))
}
