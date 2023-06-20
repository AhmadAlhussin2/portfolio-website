
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

const retrieveID = async () => {
    const IDresponse = await fetch('https://fwd.innopolis.university/api/hw2?email=a.alhussin@innopolis.university');
    const ID = await IDresponse.json();
    return ID;
}

const retriveImg = async () => {
    try {
        const ID = await retrieveID();
        const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${ID}`);
        const data = await response.json();
        let img = document.createElement('img');
        img.src = data.img;
        img.alt = data.alt;
        document.getElementById('joke-container').appendChild(img);
    
        let joke_details = document.createElement('article');
        let title = document.createElement('h3');
        title.textContent = data.safe_title;
        joke_details.appendChild(title);
    
        let date = new Date(Date.UTC(data.year, data.month, data.day))
        date = date.toLocaleDateString({ weekday: "long", year: "numeric", month: "long", day: "numeric" })
        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = date;
        joke_details.appendChild(dateParagraph);
    
        document.getElementById('joke-container').appendChild(joke_details);
        console.log(document.getElementById('joke-container'))
    }
    catch (e) {
        console.log(e);
        let errorInfo = document.createElement('p');
        errorInfo.textContent = 'There are no jokes yet :)'
        document.getElementById('joke-container').appendChild(errorInfo);
    }
}

retriveImg();
