const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const { choice } = require('./choice-confirm/choice_map')

// https://kol.coldfront.net/thekolwiki/index.php/Take_a_Look,_it%27s_in_a_Book!_(Rise)

module.exports.main = function (pageTextEncoded) {
    const pageText = choiceOverrideDecodePageText(pageTextEncoded)
    const badChoices = [
        choice[888]['Read "The Rise of the House of Spookyraven"'],
        choice[888][
            'Read "The Better Haunted Homes and Conservatories Cookbook"'
        ],
        choice[888]['Read "Ancient Forbidden Unspeakable Evil, a Love Story"'],
    ]

    kol.write(addConfirmation(pageText, badChoices))
}
