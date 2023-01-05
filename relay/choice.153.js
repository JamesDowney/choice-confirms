const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Turn_Your_Head_and_Coffin

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[153]['Investigate the fancy coffin'],
        choice[153]['Check out the pine box'],
        choice[153]['Look in the wet one'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
