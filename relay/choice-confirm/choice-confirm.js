/**
 * Adds a text prompt to the HTML script used to generate a confirmation dialogue before submitting a choice
 * @param {string} confirmationPrompt
 * @returns HTML script with text prompt
 */
function singleConfirm(confirmationPrompt) {
    return `onsubmit="return confirm('${confirmationPrompt}');"`
}

/**
 * Generic confirmation dialogue
 * @constant
 */
const genericConfirmation =
    "This is probably not an ascension-optimal choice. Continue?"

/**
 * Adds a confirmation dialogue box to each choice provided on the page provided
 * @param {string} choicePage
 * @param {number[]} choiceOptions
 * @param {string|undefined} confirmationPrompt
 * @returns Altered page html
 */
function addConfirmation(choicePage, choiceOptions, confirmationPrompt) {
    confirmationPrompt = confirmationPrompt || genericConfirmation
    var finalPage = choicePage
    choiceOptions.forEach((option) => {
        finalPage = finalPage.replace(
            `name=choiceform${option}`,
            `name=choiceform${option} ${singleConfirm(
                confirmationPrompt
            )}`
        )
    })
    return finalPage
}

/**
 * script tag to confirm a choice twice - currently only used for Ride the Rails in choice 1308
 * @constant
 */
const doubleConfirm = `<script type="text/javascript">
        function doubleConfirm() {
            var val1 = confirm("Are you sure you want to spend 9 turns?");
            if (val1 == true) {
                var val2 = confirm("Are you REALLY sure you want to waste 9 turns?");
                return val2;
            } else {
                return false;
            }
        }
    </script>`

module.exports = { doubleConfirm, addConfirmation }
