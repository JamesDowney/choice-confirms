const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Copper_Feel

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const questL10Garbage = kol.getProperty('questL10Garbage')
    var badChoices = [choice[677]['Grab a Gear']]
    if (
        kol.availableAmount(kol.Item.get('model airship')) === 0 ||
        questL10Garbage === 'step10' ||
        questL10Garbage === 'finished'
    ) {
        badChoices = badChoices.concat(choice[677]['Harrumph in Disdain'])
    }

    kol.write(addConfirmation(pageText, badChoices))
}
