const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')

// https://kol.coldfront.net/thekolwiki/index.php/On_a_Downtown_Train

module.exports.main = function (page_text_encoded) {
    const page_text =
        choiceOverrideDecodePageText(page_text_encoded)

    var badChoices = [
        1,
        2,
    ]

    kol.write(addConfirmation(page_text, badChoices))
}
