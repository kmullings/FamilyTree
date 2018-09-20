document.getElementById("loginForm").addEventListener("submit", function (e) {
    debugger;
    e.preventDefault();
    login();
});

var login = function () {
    const user = {
        email: document.forms["loginForm"]["email"].value,
        password: document.forms["loginForm"]["password"].value
    }

    // document.write(JSON.stringify(user));
    console.log(JSON.stringify(user));

    // Validate user
    var profiles = JSON.parse(window.localStorage.profiles);
    var valid = false;

    for (let index = 0; index < profiles.length; index++) {
        const profile = profiles[index];

        if ((profile.email == user.email) && (profile.password == user.password)) {
            window.sessionStorage.loggedIn = profile.email;
            window.location.href = "./index.html";
            valid = true;
            break;
        }
    }

    if (!valid) {
        alert("Invalid User.");
    }

    return false;
}
