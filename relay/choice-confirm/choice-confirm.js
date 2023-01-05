/**
 * Generic confirmation dialogue
 * @constant
 */
const genericConfirmation =
    'This is probably not an ascension-optimal choice. Continue?'

/**
 * Adds a text prompt to the HTML script used to generate a confirmation dialogue before submitting a choice
 * @param {string} confirmationPrompt
 * @returns HTML script with text prompt
 */
function singleConfirm(confirmationPrompt) {
    return `onsubmit="return confirm('${confirmationPrompt}');"`
}

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
            `name=choiceform${option} ${singleConfirm(confirmationPrompt)}`
        )
    })
    return finalPage
}

module.exports = { addConfirmation }
