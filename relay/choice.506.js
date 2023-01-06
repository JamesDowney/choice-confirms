const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Through_Thicket_and_Thinnet

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = [
        choice[506]['Follow the even darker path'],
        choice[506]['Give up and go back'],
    ]

    if (
        kol.availableAmount(kol.Item.get('Spooky-gro fertilizer')) > 0 ||
        kol.getProperty('questM16Temple') === 'finished'
    ) {
        badChoices = badChoices.concat(
            choice[506]['Investigate the dense foliage']
        )
    }

    kol.write(addConfirmation(pageText, badChoices))
}
