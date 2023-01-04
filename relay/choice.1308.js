const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const choice = require('./choice-confirm/choice_map.json')

// https://kol.coldfront.net/thekolwiki/index.php/On_a_Downtown_Train

module.exports.main = function (page_text_encoded) {
    const page_text =
        choiceOverrideDecodePageText(page_text_encoded)

    var badChoices = [
        choice[1308]['Factory District Stop (2 Adventures)'],
        choice[1308]['Just ride the rails (9 Adventures)'],
        choice[1308]['Warehouse District Stop (Free!)']
    ]

    kol.write(addConfirmation(page_text, badChoices))
}
