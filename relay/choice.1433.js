const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Sneaky,_Sneaky_(Frat_Warrior_Fatigues)

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[1433]['Visit the Yurts'],
        choice[1433]['Visit the yurt full of crates'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
