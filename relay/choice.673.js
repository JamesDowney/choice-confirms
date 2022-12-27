const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Look Under a Pile of Junk"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Look Under a Pile of Junk"`);
	page_text = page_text.replace(`value="Roll in a Pile of Junk"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Roll in a Pile of Junk"`);
	kol.write(page_text);
}