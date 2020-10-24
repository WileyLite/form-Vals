function validateName() {
    var a = document.forms["foName"]["fname"].value;
    if (a == "") {
        alert("Name must be filled out");
        return false;
    }
}