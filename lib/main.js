// Main for quoramark
var widgets= require("sdk/widget");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod")

var quora_mark_is_on = false;

// Activation function for quora_mark
function toggleActivation() {
	quora_mark_is_on = !quora_mark_is_on;
	//activateSelectors();
	return quora_mark_is_on;
}

// Widget constructor
var widget = widgets.Widget({
	id: 'toggle-switch',
	label: 'QuoraMark',
	contentURL: data.url('widget/quora-off.png'),
	contentScriptWhen: 'ready',
	contentScriptFile: data.url('widget/widget.js')
});

// Communicate with content script
widget.port.on('left-click', function() {
	console.log('activate/deactivate');
	widget.contentURL = toggleActivation() ?
			  data.url('widget/quora-on.png') :
			  data.url('widget/quora-off.png');
});

var mod = pageMod.PageMod({
	include: "*",
	contentScriptFile: data.url('modPage.js')
})	


widget.port.on('right-click', function() {
  console.log('show bookmarks list');
});

// page-mod

