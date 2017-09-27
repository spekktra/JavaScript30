const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	if(e.propertyName.includes('flex')){
		this.classList.toggle('open-active');
	}
}

// toggleOpen without '()' is a reference to the function that runs only when a panel is clicked while toggleOpen() would run at page load
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));