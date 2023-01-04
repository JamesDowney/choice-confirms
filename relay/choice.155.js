const kol = require('kolmafia')
const { addConfirm } = require('./choice-confirm/choice-confirms')

// https://kol.coldfront.net/thekolwiki/index.php/Skull,_Skull,_Skull

module.exports.main = function (page_text_encoded) {
    var choice_override_script = require('relay/choice.ash')
    var page_text =
        choice_override_script.choiceOverrideDecodePageText(page_text_encoded)
    kol.write(
        addConfirm(
            [
                'Check behind the first one',
                'Look inside the second one',
                "See what's under the third one",
            ],
            page_text
        )
    )
}
