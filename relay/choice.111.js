const kol = require('kolmafia')
const { addConfirmation } = require('./choice-confirm/choice-confirm')
const { choiceOverrideDecodePageText } = require('relay/choice.ash')
const choice = {
    "111": {
        "Serve your sentence": 1,
        "Rise and revolt": 2,
        "Plot a cunning escape": 3
    },
    "113": {},
    "153": {},
    "155": {},
    "157": {},
    "178": {},
    "182": {},
    "503": {},
    "505": {},
    "506": {},
    "523": {},
    "611": {},
    "669": {},
    "670": {},
    "671": {},
    "672": {},
    "673": {},
    "674": {},
    "675": {},
    "676": {},
    "677": {},
    "678": {},
    "923": {},
    "924": {},
    "925": {},
    "926": {},
    "927": {},
    "928": {},
    "1026": {},
    "1308": {}
}


// https://kol.coldfront.net/thekolwiki/index.php/Malice_in_Chains

module.exports.main = function (page_text_encoded) {
    const page_text =
        choiceOverrideDecodePageText(page_text_encoded)

    var badChoices = [
        choice[111]['Rise and revolt'],
        choice[111]['Serve your sentence'],
    ]

    kol.write(addConfirmation(page_text, badChoices))
}
