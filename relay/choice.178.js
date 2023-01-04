const kol = require('kolmafia')
const { addConfirm } = require('./choice-confirm/choice-confirms')

// https://kol.coldfront.net/thekolwiki/index.php/Hammering_the_Armory

module.exports.main = function (page_text_encoded) {
    var choice_override_script = require('relay/choice.ash')
    var page_text =
        choice_override_script.choiceOverrideDecodePageText(page_text_encoded)
    kol.write(addConfirm(['Dig through the stuff'], page_text))
}
