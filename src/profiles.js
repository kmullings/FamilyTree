/**
 * 
 */
var loadProfile = function () {
    let profile = null;
    let profileIndex = null;

    // Load profiles from storage
    const profiles = window.localStorage.profiles ? JSON.parse(window.localStorage.profiles) : [];

    // Loop through list of profiles to find my profile
    for (let index = 0; index < profiles.length; index++) {
        profile = profiles[index];

        if (profile.email === window.sessionStorage.loggedIn) {
            profileIndex = index;

            break;
        }
    }

    const results = {
        profile: profile,
        index: profileIndex
    };

    return results;
}

/**
 * 
 * @param {*} profile 
 */
var displayProfile = function (profile) {
    // Display my profile if found
    if (profile != null) {
        document.getElementById("first-name").value = profile.firstName;
        document.getElementById("last-name").value = profile.lastName;
        document.getElementById("email").value = profile.email;
        document.getElementById("dob").value = profile.dob;
    } else {  // Otherwise display error message and redirect user to login screen
        alert("You don't have a profile buddy!");
        window.location.href = "./sign-up.html";
    }
}

/**
 * 
 * @param {*} results 
 */
var saveProfile = function (results) {
    if (results.profile != null) {
        let profile = results.profile;
        let profileIndex = results.index;

        // Capture updated profile
        const updatedProfile = {
            firstName: document.forms["edit-profile-form"]["first-name"].value,
            lastName: document.forms["edit-profile-form"]["last-name"].value,
            email: document.forms["edit-profile-form"]["email"].value,
            dob: document.forms["edit-profile-form"]["dob"].value,
        };
        const confirmPassword = document.forms["edit-profile-form"]["confirm-password"] ? document.forms["edit-profile-form"]["confirm-password"].value : null;
        const profiles = window.localStorage.profiles ? JSON.parse(window.localStorage.profiles) : [];

        debugger;

        if (updatedProfile.password && results.profile.password != updatedProfile.password && profile.password != confirmPassword) {
            alert("Password must be the same as Confirmation Password.");
        } else {  // Replace old profile with captured profile
            profiles[profileIndex].firstName = updatedProfile.firstName ? updatedProfile.firstName : profiles[profileIndex].firstName;
            profiles[profileIndex].lastName = updatedProfile.lastName ? updatedProfile.lastName : profiles[profileIndex].lastName;
            profiles[profileIndex].email = updatedProfile.email ? updatedProfile.email : profiles[profileIndex].email;
            profiles[profileIndex].dob = updatedProfile.dob ? updatedProfile.dob : profiles[profileIndex].dob;
            profiles[profileIndex].password = updatedProfile.password ? updatedProfile.password : profiles[profileIndex].password;

            // Save updated profile
            window.localStorage.profiles = JSON.stringify(profiles);
            window.location.href = "./profile.html";
        }
    } else {
        alert("You don't have a profile buddy!");
        window.location.href = "./sign-up.html";
    }
}
