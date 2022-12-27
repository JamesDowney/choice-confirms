const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Work Out"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Work Out"`);
	page_text = page_text.replace(`value="Rifle the Gym Bag"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Rifle the Gym Bag"`);
	kol.write(page_text);
}