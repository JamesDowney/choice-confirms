const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')


// https://kol.coldfront.net/thekolwiki/index.php/Out_in_the_Open_Source

module.exports.main = function (pageTextEncoded) {
    const pageText =
        choiceOverrideDecodePageText(pageTextEncoded)
    var badChoices = [
        choice[671]['Check the Neckbeard\'s Giant Cargo Shorts'],
        choice[671]['Mess with the Computer Equipment']
    ]
    if (kol.availableAmount(kol.Item.get("massive dumbbell")) === 0) { // Not sure if this is necessary? This may not take an adventure if you don't have a dumbbell
        badChoices = badChoices.concat(choice[671]['Check out the Dumbwaiter'])
    }

    kol.write(addConfirmation(pageText, badChoices))
}