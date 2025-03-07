/**
 * Copyright (C) 2017 Nikita Tseykovets <tseikovets@rambler.ru>
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

var target = document.getElementById('textfield');
var observer = new MutationObserver(function(mutations) {
	var evals = target.getElementsByClassName('eval'),
		ind, len = evals.length;
	if(len) {
		for(ind = 0; ind < len; ++ind) {
			eval(evals[ind].innerHTML);
		}
	}
});
var config = { childList: true, characterData: true }
observer.observe(target, config);