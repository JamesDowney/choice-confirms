const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/All_Over_the_Map

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[923]["Visit the blacksmith's cottage"],
        choice[923]['Go to the black gold mine'],
        choice[923]['Check out the black church'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
