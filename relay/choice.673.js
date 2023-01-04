const kol = require('kolmafia')
const { addConfirm } = require('./choice-confirm/choice-confirms')

// https://kol.coldfront.net/thekolwiki/index.php/Putting_Off_Is_Off-Putting

module.exports.main = function (page_text_encoded) {
    var choice_override_script = require('relay/choice.ash')
    var page_text =
        choice_override_script.choiceOverrideDecodePageText(page_text_encoded)
    kol.write(
        addConfirm(
            ['Look Under a Pile of Junk', 'Roll in a Pile of Junk'],
            page_text
        )
    )
}
