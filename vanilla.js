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
<<<<<<< HEAD
	// Remeber to change this number to the relevant victim
	httpGetAsync("https://floating-inlet-43788.herokuapp.com/api/panic?number=" + "61423232323", 0);
}

function httpGetAsync(theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous
	xmlHttp.send(null);
}
=======
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
>>>>>>> 85fcf478a7d8b26642553a819db9898f6ec7b664
