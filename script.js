let section = document.querySelectorAll(".panel");

section.addEventListener('click',()=>{
	// remove active class from all another section 
	// and add it to the selected section
	sections.forEach((section) => {
		section.classList.remove('active')
	})
		section.classList.add('active')
})

