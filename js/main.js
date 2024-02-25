document.addEventListener('DOMContentLoaded', function () {
	const logo = document.querySelector('.logo')


	function logoHide() {
		if (window.scrollY >= 100) {
			logo.classList.add('logo-hide')
		} else {
			logo.classList.remove('logo-hide')
		}
	}

	window.addEventListener('scroll', logoHide)
})