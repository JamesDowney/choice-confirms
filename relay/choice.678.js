const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Yeah,_You%27re_for_Me,_Punk_Rock_Giant

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const questL10Garbage = kol.getProperty('questL10Garbage')
    var badChoices = [choice[678]['Dig Through His Drawers']]
    if (
        !kol.haveEquipped(kol.Item.get('mohawk wig')) ||
        questL10Garbage === 'step10' ||
        questL10Garbage === 'finished'
    ) {
        badChoices = badChoices.concat(choice[678]["Get the Punk's Attention"])
    }

    kol.write(addConfirmation(pageText, badChoices))
}
