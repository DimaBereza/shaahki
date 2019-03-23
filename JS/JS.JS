var tabelstart = "<tabel>";
var tabelend = "</tabel>" ;
var tabelbody = "";
var tabelbody2 = "";
for (var i = 0; i < 8; i++) {
	tabelbody += `<tr><td>${i}</td></tr>`
	for (var i = 0; i < 8; i++) {
		tabelbody2 += `${i}tabelbody`
		
	}
}
var result = `${tabelstart}${tabelbody2}${tabelend}`

$("body").prepend(result);