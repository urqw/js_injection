/**
 * Copyright (C) 2017 Nikita Tseykovets <tseikovets@rambler.ru>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
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