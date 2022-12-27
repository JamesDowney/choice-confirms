const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Investigate the first urn"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Investigate the first urn"`);
	page_text = page_text.replace(`value="Check out the second one"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Check out the second one"`);
	page_text = page_text.replace(`value="See what's behind Urn #3"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="See what's behind Urn #3"`);
	kol.write(page_text);
}