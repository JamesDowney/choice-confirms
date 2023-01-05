const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Death_Rattlin%27

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[523]['Open up the closed one'],
        choice[523]['Crawl inside the open one'],
        choice[523]['Dig through the rubble on the ground'],
        choice[523]['Leave the drawers alone'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
