const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/You_Don%27t_Mess_Around_with_Gym

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[670]['Work Out'],
        choice[670]['Rifle the Gym Bag'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
