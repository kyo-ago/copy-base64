chrome.contextMenus.onClicked.addListener(function (info) {
	var img = document.createElement('img');
	img.setAttribute('src', info.srcUrl);
	img.addEventListener('load', copyBase64);
	document.body.appendChild(img);
});
function copyBase64 () {
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext("2d");
	ctx.drawImage(this, 0, 0);
	setTimeout(this.remove.bind(this))

	var input = document.createElement('input');
	input.setAttribute('type', 'text');
	document.body.appendChild(input);
	input.value = canvas.toDataURL("image/png");
	input.select();
	document.execCommand('Copy');
	input.remove();
}
chrome.contextMenus.create({
	'id' : 'copy_base64',
	'title' : 'Copy base64',
	'contexts' : ['image']
});
