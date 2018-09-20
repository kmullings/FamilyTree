/**
 * 
 */
var loadFamilyMember = function () {
    // debugger;

    let familyMember = null;
    let familyMemberIndex = null;
    const url = new URL(window.location.href);
    const familyMemberId = url.searchParams.get("id");
    let familyMembers = window.localStorage.familyMembers ? JSON.parse(window.localStorage.familyMembers) : [];

    if (familyMemberId) {
        for (let index = 0; index < familyMembers.length; index++) {
            familyMember = familyMembers[index];

            if (familyMember.id == parseInt(familyMemberId)) {
                familyMemberIndex = index;

                break;
            }
        }
    }

    const results = {
        familyMember: familyMember,
        index: familyMemberIndex
    };

    return results;
}

/**
 * 
 * @param {*} familyMember 
 */
var displayFamilyMember = function (familyMember) {
    // debugger;

    if (familyMember != null) {
        document.getElementById("first-name").innerText = familyMember.firstName;
        document.getElementById("last-name").innerText = familyMember.lastName;
        document.getElementById("dob").innerText = familyMember.dob;

        let editButtonNode = document.getElementById("edit-button");

        editButtonNode.setAttribute("href", "upsert-family-member.html?id=" + familyMember.id);
    } else {
        alert("Family member not found.");
    }
}

/**
 * 
 * @param {*} familyMember 
 */
var displayFamilyMemberForEdit = function (familyMember) {
    // debugger;

    if (familyMember != null) {
        document.getElementById("first-name").value = familyMember.firstName;
        document.getElementById("last-name").value = familyMember.lastName;
        document.getElementById("dob").value = familyMember.dob;
    } else {
        alert("Family member not found.");
    }
}

/**
 * 
 */
var saveFamilyMember = function () {
    const familyMember = {
        firstName: document.forms["upsert-family-member-form"]["first-name"].value,
        lastName: document.forms["upsert-family-member-form"]["last-name"].value,
        dob: document.forms["upsert-family-member-form"]["dob"].value,
        createdBy: window.sessionStorage.loggedIn
    };

    console.log(JSON.stringify(familyMember));

    const url = new URL(window.location.href);
    const familyMemberId = url.searchParams.get("id");
    let familyMembers = window.localStorage.familyMembers ? JSON.parse(window.localStorage.familyMembers) : [];

    if (familyMemberId) {
        for (let index = 0; index < familyMembers.length; index++) {
            if (familyMembers[index].id == parseInt(familyMemberId)) {
                familyMembers[index] = familyMember;
                familyMembers[index].id = parseInt(familyMemberId);
                
                break;
            }
        }
    } else {
        if (familyMembers.length == 0) {
            familyMember.id = 1;
        } else {
            familyMember.id = familyMembers.length + 1;
        }

        familyMembers.push(familyMember);
    }

    window.localStorage.familyMembers = JSON.stringify(familyMembers);
    window.location.href = "./family-member-details.html?id=" + familyMember.id;

    return false;
}