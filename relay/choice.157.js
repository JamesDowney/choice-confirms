const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Urning_Your_Keep

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[157]['Investigate the first urn'],
        choice[157]['Check out the second one'],
        choice[157]["See what's behind Urn #3"],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
