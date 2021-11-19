const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let btn = document.getElementById("btn");
    var toast = document.querySelector('#toast');
    var bg = document.querySelector('.max-screen');
    function myFuntion() {
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor()]
        }
        document.getElementById('bgc').innerHTML = hexColor;
        bg.style.background = hexColor;

    }
    function randomColor() {
        return Math.floor(Math.random() * 16);
    }
    function toastDiv(msg) {
        toast.innerHTML = msg;
        toast.className = "show";

        setTimeout(function () {
            toast.className = toast.className.replace("show", "");
        }, 2000);
    }
    // copy to clipboard
    const getCopy = document.getElementById("copy");
    getCopy.addEventListener('click', (event) => {
        toastDiv("Copied To Clipboard Successfully");
        navigator.clipboard.writeText(bgc.innerHTML);
    });
