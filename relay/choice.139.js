const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Bait_and_Switch

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[139]['Take the bait and go wreak havoc'],
        choice[139]['Gaffle some bait for later'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
