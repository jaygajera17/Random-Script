        var btn = document.querySelector('.btn');
        var code = document.querySelector('.code');
        var toast = document.querySelector('#toast');
        btn.addEventListener("click", generate);
        function generate() {
        var data = $('#textvalue').val();
        window.url = `https://api.qrserver.com/v1/create-qr-code/?size=165x165&data=${data}`;
        code.src = window.url;
        toastDiv("Your QR Code Generated Successfully..!!!!!");
        document.querySelector('.minibtn').style.visibility = "visible";
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
        navigator.clipboard.writeText(window.url);
        });