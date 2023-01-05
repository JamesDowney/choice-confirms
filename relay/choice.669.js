const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/The_Fast_and_the_Furry-ous

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const { choice } = require('./choice-confirm/choice_map')
    kol.write(
        addConfirmation(["Check out the Furry's Figurine Collection"], pageText)
    )
}
