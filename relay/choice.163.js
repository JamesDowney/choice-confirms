const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Melvil_Dewey_Would_Be_Ashamed

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[163]['Hork the gray-bound volume'],
        choice[163]['Yoink the green-bound tome'],
        choice[163]['Gaffle the purple-bound book'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
