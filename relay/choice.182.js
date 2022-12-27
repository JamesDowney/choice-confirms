const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Check the cargo hold"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Check the cargo hold"`);
	page_text = page_text.replace(`value="Head down to the galley"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Head down to the galley"`);
	kol.write(page_text);
}