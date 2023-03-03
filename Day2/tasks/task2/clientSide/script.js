const fetchData = document.querySelector(".fetchData");
const content = document.querySelector(".content")
const welcomeHeading = document.getElementsByTagName("h1")



console.log(welcomeHeading);

async function fetchTheData() {
    let response = await fetch('../serverSide/users.json');
    let data = await response.text()
    let users = JSON.parse(data);
    //console.log(users);
    content.style.textAlign = "left";
    for (let elem of users) {
        console.log(elem);
        var name = elem["name"];
        var tel = elem["mobile"];
        var email = elem["email"];
        var address = elem["address"];
        content.innerHTML += `name: ${name} <br> email: ${email} <br> mobile: ${tel} <br> address: ${address} <br> <hr>`
        content.innerHTML += "\n"
        console.log(name, tel, email, address);
        //console.log("\n");
    }
}

fetchData.addEventListener('click', async function () {
    await fetchTheData()
    for (let i = welcomeHeading.length; i--;) {
        welcomeHeading[i].style.display = 'none';
    }


})
