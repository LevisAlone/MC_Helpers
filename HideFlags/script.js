function updateOutput() {
    var output = document.getElementById("output");
    var code = document.getElementsByClassName("code")[0];
	var amount = 0;
	for (var i = 1; i <= 64; i *= 2)
    if(document.getElementById(i.toString()).checked)
        amount += i;
    if(amount != 0) {
        output.value = "HideFlags:"+amount;
        code.innerHTML = `/give @s minecraft:stone{HideFlags:${amount}}`;
    }
    else {
        output.value = "";
        code.innerHTML = `/give @s minecraft:stone{HideFlags:&lt;Bit Mask&gt;}`;
    }
    
}

function copy(elementId) {
  var c = document.getElementById(elementId);
  c.select();
  document.execCommand("copy");
}