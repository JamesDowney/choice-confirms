const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Investigate the fancy coffin"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Investigate the fancy coffin"`);
	page_text = page_text.replace(`value="Check out the pine box"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Check out the pine box"`);
	page_text = page_text.replace(`value="Look in the wet one"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Look in the wet one"`);
	kol.write(page_text);
}