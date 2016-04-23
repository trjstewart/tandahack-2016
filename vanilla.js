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
