const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Random_Lack_of_an_Encounter

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = []

    if (
        (kol.availableAmount(kol.Item.get('Spooky-gro fertilizer')) > 0 &&
            kol.availableAmount(kol.Item.get('spooky temple map'))) ||
        kol.getProperty('questM16Temple') === 'finished'
    ) {
        badChoices = badChoices.concat(choice[502]['Brave the dark thicket'])
    }

    kol.write(
        addConfirmation(
            pageText,
            badChoices,
            "You've already gotten the relevant quest items for that area."
        )
    )
}
