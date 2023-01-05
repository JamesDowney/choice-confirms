const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')


// https://kol.coldfront.net/thekolwiki/index.php/Out_in_the_Open_Source

module.exports.main = function (pageTextEncoded) {
    const pageText =
        choiceOverrideDecodePageText(pageTextEncoded)
const { choice } = require('./choice-confirm/choice_map')
	kol.write(addConfirmation(["Check the Neckbeard's Giant Cargo Shorts", "Mess with the Computer Equipment"], pageText));
}