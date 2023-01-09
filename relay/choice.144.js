const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/One_Less_Room_Than_In_That_Movie

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[144]['Supply Room'],
        choice[144]['Munitions Dump'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
