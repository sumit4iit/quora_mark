// This code will extract all permanant links and add a bookmark elements.
// Gotta keep this safe.
k = document.getElementsByClassName("timestamp");
for(var i = 0; i < k.length; i++) {   
//    k[i].style.background = 'black';
    node = k[i];
    lnk = document.createElement("button");
    lnk.href = node.firstChild.href;
    txt = document.createTextNode("bookmark");
    lnk.appendChild(txt);
    lnk.className = "quora_mark";
    lnk.id = "quora_mark_"+i;
//    lnk.onclick = bookmark;
    lnk.style.paddingLeft = '10px';
    node.appendChild(lnk);
}
