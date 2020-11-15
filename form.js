function validateName() {
    var a = document.forms["myForm"]["fname"].value;
    if (a == "") {
        alert("Name must be filled out");
        return false;
    }
}