let main = document.getElementsByClassName("panel"); // HTMLCollection

// Loop through each element in the collection
for (let i = 0; i < main.length; i++) {
    main[i].addEventListener("click", function() {
        this.classList.toggle("active"); // Toggle class on the clicked element
        console.log("Clicked panel " + i);
    });
}



// 1 const panels document.querySelectorAll('.panel') 
// 23456 3 
// 7 
// panels.forEach(panel => { 
// panel.addEventListener('click', () => { 
// removeActiveClasses() 
// panel.classList.add('active') 
// 8}) 
// 9 
// 10 function removeActiveClasses() { 
// 11 
// 12 
// panel.forEach(panel => { 
// 13 
// panel.classList.remove('active') 
// 14} 