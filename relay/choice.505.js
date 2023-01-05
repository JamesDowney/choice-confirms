const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Consciousness_of_a_Stream

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const questL02Larva = kol.getProperty('questL02Larva')
    var badChoices = [choice[505]['Go further upstream']]
    if (questL02Larva === 'step1' || questL02Larva === 'finished') {
        badChoices = badChoices.concat(choice[505]['March to the marsh'])
    }

    kol.write(addConfirmation(pageText, badChoices))
}
