const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Sneaky,_Sneaky_(War_Hippy_Fatigues)

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[1434]['Visit a dorm room'],
        choice[1434]['Check out the hallway'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
