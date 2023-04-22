function start() {

    var firstname = document.getElementById("fname").value;
    console.log(`Firstname:${firstname}`);

    var lastname = document.getElementById("ltname").value;
    console.log(`Lastname:${lastname}`);

    let email = document.getElementById("mail").value;
    console.log(`Email:${email}`);

    let adress = document.getElementById("address").value;
    console.log(`Address:${adress}`);

    var gender = document.querySelector('input[name="gender"]:checked').value;
    console.log("Gender: " + gender);

    var state1 = document.getElementById("state").value;
    console.log(`State:${state1}`);

    var country1 = document.getElementById("country").value;
    console.log(`Country:${country1}`);

    var hobbies = [];
    var checkboxes = document.querySelectorAll('input[name="hobbies"]:checked');
    checkboxes.forEach(function (checkbox) {
        hobbies.push(checkbox.value);
    });

    console.log("Hobbies: " + hobbies.join(", "));

}

function reset(){
    form.reset();
}
