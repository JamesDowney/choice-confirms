const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Mess with the Computer Equipment"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Mess with the Computer Equipment"`);
	page_text = page_text.replace(`value="Check the Neckbeard's Giant Cargo Shorts"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Check the Neckbeard's Giant Cargo Shorts"`);
	kol.write(page_text);
}