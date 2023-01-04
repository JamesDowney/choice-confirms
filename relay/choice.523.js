const kol = require("kolmafia")
const { addConfirm } = require("./choice-confirm/choice-confirms");


// https://kol.coldfront.net/thekolwiki/index.php/Through_Thicket_and_Thinnet

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
	kol.write(addConfirm(["Open up the closed one", "Crawl inside the open one", "Dig through the rubble on the ground"], page_text));
}