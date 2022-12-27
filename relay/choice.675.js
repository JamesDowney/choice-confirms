const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="End His Suffering"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="End His Suffering"`);
	page_text = page_text.replace(`value="Snag some Candles"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Snag some Candles"`);
	kol.write(page_text);
}