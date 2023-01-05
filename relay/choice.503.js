const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/The_Road_Less_Traveled

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = [choice[503]['Follow the ruts']]

    if (
        kol.availableAmount(kol.Item.get('spooky sapling')) > 0 ||
        kol.getProperty('questM16Temple') === 'finished'
    ) {
        badChoices = badChoices.concat(choice[503]['Talk to the hunter'])
    }

    kol.write(addConfirmation(pageText, badChoices))
}
