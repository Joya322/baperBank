//step-1: add click event handler with submit button
document.getElementById("btn-submit").addEventListener("click", function () {
    //step-2: get the email address inside the email input field
    const emailFeild = document.getElementById("user-email");
    const email = emailFeild.value;

    //step-3: get the password inside the password input field
    const passwordFeild = document.getElementById("user-password");
    const password = passwordFeild.value;

    //Do not verify email password on the client side
    //step-4: verify email and password
    if (email === "user@man.com" && password === "secret123") {
        // console.log("valid user");
        window.location.href = "bank.html"
    }
    else {
        alert("invalid user");
    }
})