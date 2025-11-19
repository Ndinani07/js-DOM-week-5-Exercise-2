// function updateNameRole(){
    



// }
const updateName = document.getElementById("updateNameBtn")
const updateRole = document.getElementById("updateRoleBtn")

updateName.addEventListener("click", function(){
    let newName = prompt("Enter the new Name");

    if(newName!= null && newName !== ""){
        document.getElementById("profileName").textContent = newName 
    }else {
            console.error("There is an ERROR my guy find it");
        }


});
updateRole.addEventListener("click",function(){
    let newRole = prompt("Enter the new Role");

    if(newRole!= null && newRole !== ""){
        document.getElementById("profileRole").textContent = newRole
    }else {
            console.error("There is an ERROR my guy find it");
        }

});


const toggleStatus = document.getElementById("toggleStatusBtn")
toggleStatus.addEventListener("click", function(){
    var element = document.getElementById("toggleStatusBtn");
    element.classList.toggle("active-status");
})

const changeImageBtn = document.getElementById("changeImageBtn");
const imagePicker = document.getElementById("imagePicker");
const profileImage = document.getElementById("profileImage");

// When button is clicked, open file picker
changeImageBtn.addEventListener("click", function () {
    imagePicker.click();
});

// When user selects a file, update the image source
imagePicker.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        profileImage.src = URL.createObjectURL(file);
    }
});