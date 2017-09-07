"use strict"

var C = {
	menu_arr : document.getElementsByClassName('main-menu')[0].getElementsByTagName('li'),
	menu_desc_arr : document.getElementsByClassName('main-desc')[0].getElementsByTagName('li'),

	comment_arr : document.getElementsByClassName('comment-ul')[0].getElementsByTagName('li'),
	comment_item_arr : document.getElementsByClassName('side_comment')[0].getElementsByTagName('li'),

	download_btn : document.getElementsByClassName('download-btn')[0],
	download_box : document.getElementsByClassName('download-box')[0],
	remove_box : document.getElementsByClassName('remove-box')[0],
}
var c_count = 1;

window.onload = function(){
	(function(){
		var menu_arr = C.menu_arr;
		var comment_item_arr = C.comment_item_arr;
		for (var i = 0; i < menu_arr.length; i++) {
			menu_arr[i].index = i;
			menu_arr[i].addEventListener('click', menu_click);
		};
		for (var i = 0; i < comment_item_arr.length; i++) {
			comment_item_arr[i].index = i;
			comment_item_arr[i].addEventListener('click', comment_click);
		};
		C.download_btn.addEventListener('click', function(){
			C.download_box.style.display = 'block';
		});
		C.remove_box.addEventListener('click', function(){
			C.download_box.style.display = 'none';
		})

		window.setInterval(comment_auto, 3000);
	})()
}

function menu_click(){
	var menu_arr = C.menu_arr;
	var menu_desc_arr = C.menu_desc_arr;
	for (var i = 0; i < menu_arr.length; i++) {
		menu_arr[i].classList.remove('current-item');
		menu_desc_arr[i].style.display = 'none';
		if (this.index == i) {
			this.classList.add('current-item');
			menu_desc_arr[i].style.display = 'flex';
		}
	}
}

function comment_click(){
	var comment_arr = C.comment_arr;
	var comment_item_arr = C.comment_item_arr;
	for (var i = 0; i < comment_item_arr.length; i++) {
		comment_item_arr[i].classList.remove('active');
		comment_arr[i].style.display = 'none';
		if (this.index == i) {
			this.classList.add('active');
			comment_arr[i].style.display = 'block';
		}
	}
	c_count = this.index;
}

function comment_auto() {
	var l = C.comment_item_arr.length;
	if (c_count < l && l) {
		C.comment_item_arr[c_count].click();
		c_count++;
	}else {
		C.comment_item_arr[0].click();
		c_count = 0;
	}
}