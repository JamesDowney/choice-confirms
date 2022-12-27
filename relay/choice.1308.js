const kol = require("kolmafia");
const { doubleConfirm } = require("./choice-confirms");

// https://kol.coldfront.net/thekolwiki/index.php/On_a_Downtown_Train

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	page_text = page_text.replace(`value="Just ride the rails (9 Adventures)">`, `onclick="return doubleConfirm()" value="Just ride the rails (9 Adventures)"> ${doubleConfirm}`);
	kol.write(page_text);
}