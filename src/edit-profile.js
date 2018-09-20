window.onload = function (e) {
    // debugger;

    // Checked user is logged in
    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "./login.html";
    }

    const results = loadProfile();

    displayProfile(results.profile);
};

document.getElementById("edit-profile-form").addEventListener("submit", function (e) {
    // debugger;

    e.preventDefault();

    const results = loadProfile();

    saveProfile(results);
});