
const removeClasses = () => {
    const buttons = document.getElementsByTagName('header')[0].getElementsByTagName('a');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-nav")
    }
}


const buttons = document.getElementsByTagName('header')[0].getElementsByTagName('a');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        removeClasses();
        buttons[i].classList.add("active-nav")
    })
}