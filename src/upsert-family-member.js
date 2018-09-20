window.onload = function (e) {
    // debugger;

    // Checked user is logged in
    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "./login.html";
    }

    const url = new URL(window.location.href);
    const familyMemberId = url.searchParams.get("id");

    if (familyMemberId) {
        const results = loadFamilyMember();

        displayFamilyMemberForEdit(results.familyMember);
    }
};

document.getElementById("upsert-family-member-form").addEventListener("submit", function (e) {
    // debugger;

    e.preventDefault();
    saveFamilyMember();
});
