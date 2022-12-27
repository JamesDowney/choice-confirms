const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Check behind the first one"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Check behind the first one"`);
	page_text = page_text.replace(`value="Look inside the second one"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Look inside the second one"`);
	page_text = page_text.replace(`value="See what's under the third one"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="See what's under the third one"`);
	kol.write(page_text);
}