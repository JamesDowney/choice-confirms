const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Take_a_Look,_it%27s_in_a_Book!_(Fall)

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[889]['Read "The Fall of the House of Spookyraven"'],
        choice[889]['Read "To Serve Man... Delicious Cocktails"'],
        choice[889][
            'Read "Ancient Forbidden Unspeakable Yoga, a Beginner\'s Guide"'
        ],
        choice[889]['Read the dictionary'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
