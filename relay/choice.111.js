import { write } from 'kolmafia'
import { addConfirmation } from './choice-confirm/choice-confirm'
import { choiceOverrideDecodePageText } from 'relay/choice.ash'
import choice from './choice-confirm/choice_map.json'

// https://kol.coldfront.net/thekolwiki/index.php/Malice_in_Chains

export function main(page_text_encoded) {
    const page_text = choiceOverrideDecodePageText(page_text_encoded)

    var badChoices = [
        choice[111]['Rise and revolt'],
        choice[111]['Serve your sentence'],
    ]

    write(addConfirmation(badChoices, page_text))
}
