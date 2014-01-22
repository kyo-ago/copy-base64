chrome.contextMenus.onClicked.addListener(function (info) {
	var img = document.createElement('img');
	img.setAttribute('src', info.srcUrl);
	img.addEventListener('load', copyBase64);
	document.body.appendChild(img);
});
function copyBase64 () {
	var canvas = document.createElement('canvas');
	canvas.width = this.width;
	canvas.height = this.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(this, 0, 0);

	var textarea = document.createElement('textarea');
	document.body.appendChild(textarea);

	textarea.value = canvas.toDataURL("image/png");
	textarea.select();

	document.execCommand('copy');

	textarea.remove();
	this.remove();
}
chrome.contextMenus.create({
	'id' : 'copy_base64',
	'title' : 'Copy base64',
	'contexts' : ['image']
});
