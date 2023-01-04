const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const choice = require('./choice-confirm/choice_map.json')

// https://kol.coldfront.net/thekolwiki/index.php/Malice_in_Chains

module.exports.main = function (page_text_encoded) {
    const page_text = choiceOverrideDecodePageText(page_text_encoded)

    var badChoices = [
        choice[111]['Rise and revolt'],
        choice[111]['Serve your sentence'],
    ]

    kol.write(addConfirmation(badChoices, page_text))
}
