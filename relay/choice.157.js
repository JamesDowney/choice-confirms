const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirms")

// https://kol.coldfront.net/thekolwiki/index.php/Urning_Your_Keep

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["Investigate the first urn", "Check out the second one", "See what's behind Urn #3"], page_text));
}