const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/The_Blackberry_Cobbler

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = [
        choice[928]['Make some slippers'],
        choice[928]['Make some moccasins'],
        choice[928]['Make some combat boots'],
    ]
    if (kol.availableAmount(kol.Item.get('blackberry galoshes')) > 0) {
        badChoices = badChoices.concat(choice[928]['Make some galoshes'])
    }
	
    kol.write(addConfirmation(pageText, badChoices))
}
