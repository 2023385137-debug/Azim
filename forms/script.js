 alert("Selamat Datang");

    function mula() {
        alert("Boleh start isi borang. Tunggu apa lagi");
    }

    function hantaq() {
        var nama = document.getElementById("name").value;
        var fon = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        
        document.getElementById("result").innerHTML = "Terima kasih **" + nama + "**, kami akan hubungi anda di **" + fon + "** atau **" + email + "**.";
    }

    function darkmode() {
        document.getElementById("first-page").style.color = "red";
        document.getElementById("first-page").style.backgroundColor = "darkblue";
    }

    function lightmode() {
        document.getElementById("first-page").style.color = "black";
        document.getElementById("first-page").style.backgroundColor = "lightblue";
    }

    function largeText() {
        document.getElementById("first-page").style.fontSize = "200%";
    }

    function smallText() {
        document.getElementById("first-page").style.fontSize = "50%";
    }

    function borang() {
        document.getElementById("borang").style.backgroundColor = "lightgreen";
    }
</script>
