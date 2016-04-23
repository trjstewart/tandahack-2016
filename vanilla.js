function DeleteTanda() {
	$('#message').hide();
	$('#buttons-one').hide();
	$('#please-wait').show();
	$.get("database.json").done(function(data){
		thing(data)
		setTimeout(StartHack, 3000);
	});
}

function StartHack() {
	$('#please-wait').hide();
	test(true);
	$('#buttons-two').show();
	httpGetAsync("https://floating-inlet-43788.herokuapp.com/api/panic?number=" + "61451668240", 0);
}

function StartDelete(){
	setInterval(
		function(){
			thing.shift();
		},
		200
	);
}

thing = ko.observableArray();
test = ko.observable();
var vm = function(){
	this.thing = thing;
	this.test = test;
}
ko.applyBindings(new vm());

function httpGetAsync(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous
	xmlHttp.send(null);
}
