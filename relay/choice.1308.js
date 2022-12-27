const kol = require("kolmafia")

module.exports.main = function (page_text_encoded)
{
	var choice_override_script = require("relay/choice.ash");
	var page_text = choice_override_script.choiceOverrideDecodePageText(page_text_encoded);
    var script = 
        `<script type="text/javascript">
            function doubleConfirm() {
                var val1 = confirm("Are you sure you want to spend 9 turns?");
                if (val1 == true) {
                    var val2 = confirm("Are you REALLY sure you want to waste 9 turns?");
                    return val2;
                } else {
                    return false;
                }
            }
        </script>`
	page_text = page_text.replace(`value="Just ride the rails (9 Adventures)">`, `onclick="return doubleConfirm()" value="Just ride the rails (9 Adventures)"> ${script}`);
	kol.write(page_text);
}