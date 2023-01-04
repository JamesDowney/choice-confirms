/**
 * script tag to confirm a choice twice - currently only used for Ride the Rails in choice 1308
 */
var doubleConfirm =
    `<script type="text/javascript">
        function doubleConfirm() {
            var val1 = confirm("Are you sure you want to spend 9 turns?");
            if (val1 == true) {
                var val2 = confirm("Are you REALLY sure you want to waste 9 turns?");
                return val2;
            } else {
                return false;
            }
        }
    </script>`;

/**
 * onClick attribute to confirm a choice
 */
var singleConfirm = `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')"`;

/**
 * Adds a confirmation dialogue box to each choice provided on the page provided
 * @param {string[]} choiceOptions 
 * @param {string} choicePage 
 * @param {string|undefined} confirmDialogue
 * @returns altered page html
 */
function addConfirm(choiceOptions, choicePage, confirmDialogue) {
    confirmDialogue = confirmDialogue || singleConfirm;
    var finalPage = choicePage;
    choiceOptions.forEach(option => {
        finalPage = finalPage.replace(`value="${option}"`, `${confirmDialogue} value="${option}"`)
    });
    return finalPage;
}

module.exports = {doubleConfirm, singleConfirm, addConfirm}