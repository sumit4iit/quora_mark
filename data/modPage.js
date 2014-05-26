// This code will extract all permanant links and add a bookmark elements.
// Gotta keep this safe.

var data = require("sdk/self").data;
var self = require("sdk/self");

// TODO: make this more generic.
function createNode()
{
		lnk = document.createElement("a");
		lnk.href = node.firstChild.href;
		txt = document.createTextNode("bookmark");
		lnk.appendChild(txt);
		lnk.className = "quora_mark";
		lnk.id = "quora_mark_"+i;
//      lnk.onclick = bookmark;
		lnk.style.paddingLeft = '10px';
} 

// Initialize document by adding bookmark link
function initialize()
{
	k = document.getElementsByClassName("timestamp");
	for(var i = 0; i < k.length; i++) {   
		node = k[i];
		node.appendChild(createNode());
	}
}

// Teardown document by removing added links.
function teardown()
{
	// TODO: Implement this.
}

// Activation of the script is done here. 
self.port.on('activate')
{

}
