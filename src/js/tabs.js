if (localStorage.getItem("reload") === "false") {
	localStorage.removeItem("reload");
  } else {
	localStorage.setItem("reload", "false");
	window.location = window.location;
  };

var tab;
var tabContent;

window.onload = () => {
    tabContent = document.getElementsByClassName('profile__content');
	tab = document.getElementsByClassName('navigation__link');
	hideTabsContent(1);	
}

hideTabsContent = a => {
	for(var i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('whiteborder');		
	}	
}

document.getElementById('tabs_switch').onclick = event => {
	var target = event.target;
	if(target.className == 'navigation__link') {
		for(var i = 0; i < tab.length; i++) {
			if(target == tab[i]){
				showTabsContent(i);
				break;
			}
		}
	}
}

showTabsContent = b => {
	if(tabContent[b].classList.contains('hide')) {
		hideTabsContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

