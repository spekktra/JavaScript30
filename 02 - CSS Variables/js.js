const inputs = document.querySelectorAll('.controls input');

// • updates css variable value 
function handleUpdate() {
	// • this.dataset.sizing for storing the dataset sizing string
	// • " || '' " color doesn't have a unit 
	const unit = this.dataset.sizing || '';
	// • selects entire document and sets the css variables 
	document.documentElement.style.setProperty(`--${this.id}`, this.value + unit);
}

// 1. looping over elements in inputs
// 2. adding event listeners for 'change' and 'mousemove'
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));