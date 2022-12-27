const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Rifle the Wallet-Purse-Leprechaun"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Rifle the Wallet-Purse-Leprechaun"`);
	page_text = page_text.replace(`value="Read the Magazine-Orangutan-lamp"`, `onclick="return confirm('This is probably not an ascension-optimal choice. Continue?')" value="Read the Magazine-Orangutan-lamp"`);
	kol.write(page_text);
}