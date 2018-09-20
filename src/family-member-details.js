window.onload = function (e) {
    debugger;

    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "./login.html";
    }

    const results = loadFamilyMember();

    displayFamilyMember(results.familyMember);
};
