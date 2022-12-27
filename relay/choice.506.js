const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Follow the even darker path"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Follow the even darker path"`);
	page_text = page_text.replace(`value="Give up and go back"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Knock on the cottage door"`);
	kol.write(page_text);
}