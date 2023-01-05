const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const choice = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/On_a_Downtown_Train

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[1308]['Factory District Stop (2 Adventures)'],
        choice[1308]['Just ride the rails (9 Adventures)'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
