const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/You_Found_Your_Thrill

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = [choice[924]['Head toward the buzzing sound']]
    if (kol.availableAmount(kol.Item.get('blackberry galoshes')) > 0) {
        badChoices = badChoices.concat(choice[924]["Visit the cobbler's house"])
    }
	
    kol.write(addConfirmation(pageText, badChoices))
}
