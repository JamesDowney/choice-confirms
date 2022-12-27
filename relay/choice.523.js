const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Open up the closed one"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Open up the closed one"`);
	page_text = page_text.replace(`value="Crawl inside the open one"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Crawl inside the open one"`);
	page_text = page_text.replace(`value="Dig through the rubble on the ground"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Dig through the rubble on the ground"`);
	kol.write(page_text);
}