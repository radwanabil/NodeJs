const fetchData = document.querySelector(".fetchData");
const content = document.querySelector(".content")
const welcomeHeading = document.getElementsByTagName("h1")



console.log(welcomeHeading);
async function fetchTheData() {
    let response = await fetch('../serverSide/users.json');
    let data = await response.text()
    let users = JSON.parse(data).users;
    //console.log(users);
    content.style.textAlign = "left";
    for (elem in users) {
        var name = users[elem]["name"];
        var tel = users[elem]["mobile"];
        var email = users[elem]["email"];
        var address = users[elem]["address"];
        content.innerHTML += `name: ${name} <br> email: ${email} <br> mobile: ${tel} <br> address: ${address} <br> <hr>`
        content.innerHTML += "\n"
        console.log(name, tel, email, address);
        //console.log("\n");
    }
}

fetchData.addEventListener('click', function () {
    fetchTheData()
        .then(response => response.text())
        .catch((err) => console.log(err))
    for (let i = welcomeHeading.length; i--;) {
        welcomeHeading[i].style.display = 'none';
    }


})
