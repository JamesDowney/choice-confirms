const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Home_on_the_Free_Range

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [choice[1026]['Look under the bed']]
    
    kol.write(addConfirmation(pageText, badChoices))
}
