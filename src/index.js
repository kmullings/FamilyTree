window.onload = function (e) {
    // debugger;

    if (typeof window.sessionStorage.loggedIn === "undefined" || window.sessionStorage.loggedIn === null || window.sessionStorage.loggedIn === "") {
        alert("You need to be logged in first.");
        window.location.href = "./login.html";
    }

    loadFamilyTree();
};

document.getElementsByClassName("delete-button").addEventListener("click", function (e) {
    debugger;

    e.preventDefault();

    alert("Clicked delete button.");
});

/**
 * 
 */
var loadFamilyTree = function () {
    // Get the stories div
    const familyTreeNode = document.getElementById("faily-tree");

    // Get list of stories
    let familyMembers = window.localStorage.familyMembers ? JSON.parse(window.localStorage.familyMembers) : [];

    // Loop through list of familyMembers
    for (let index = 0; index < familyMembers.length; index++) {
        const familyMember = familyMembers[index];

        const familyMemberNode = createFamilyMemberNode(familyMember);

        familyTreeNode.appendChild(familyMemberNode);
    }
}

/**
 * 
 * @param {*} familyMember 
 */
var createFamilyMemberNode = function (familyMember) {
    var familyMemberNode = document.createElement("div");
    var detailsNode = document.createElement("a");
    var editNode = document.createElement("a");
    var deleteNode = document.createElement("span");

    detailsNode.setAttribute("href", "family-member-details.html?id=" + family-member.id);
    detailsNode.innerHTML = '<span class="family-member-name">' + family-member.firstName + + ' ' + family-member.lastName + '</span> |';

    editNode.setAttribute("href", "upsert-family-member.html?id=" + family-member.id);
    editNode.innerHTML = '<span class="edit-button"> \
        <i>Edit</i> \
    </span> |';

    deleteNode.innerHTML = '<span class="delete-button"> \
    <em>Delete</em> \
</span>';

    familyMemberNode.appendChild(detailsNode);
    familyMemberNode.appendChild(editNode);
    familyMemberNode.appendChild(deleteNode);

    return familyMemberNode;
}
