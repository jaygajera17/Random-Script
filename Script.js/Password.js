var password = document.getElementById("password");

    function genPassword() {
        var chars = "";

        if (document.getElementById("checkbox").checked == true) {
            chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&%";
        } else {
            chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        var passwordLength = document.getElementById("typeNumber").value - 1;
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("password").value = password;
    }
    function toastDiv(msg) {
        toast.innerHTML = msg;
        toast.className = "show";

        setTimeout(function () {
            toast.className = toast.className.replace("show", "");
        }, 2000);
    }


    const getCopy = document.getElementById("copy");
    getCopy.addEventListener('click', (event) => {

        toastDiv("Copied To Clipboard Successfully");
        navigator.clipboard.writeText(document.getElementById("password").value);
    });

