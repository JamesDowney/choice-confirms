const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Exploreth the Writing Desk"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Exploreth the Writing Desk"`);
	page_text = page_text.replace(`value="Turn on Ye Olde Television Set"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Turn on Ye Olde Television Set"`);
	kol.write(page_text);
}