function hitungKeliling (){
    let sisi = document.getElementById("sisi").value;
    let keliling = 4 * sisi;

    document.getElementById("hasil").innerHTML =
    "Hasil : <br><br>Rumus Keliling = 4 x Sisi<br>Sisi = " + sisi + "<br>Keliling = 4 x " + sisi + " = " + keliling
}

function hitungLuas (){
    let sisi = document.getElementById("sisi").value;
    let luas = sisi * sisi;

    document.getElementById("hasil").innerHTML =
    "Hasil : <br><br>Rumus Luas = Sisi x Sisi<br>Sisi = " + sisi + "<br>Luas = " + sisi + " x " + sisi + " = " + luas
}

function reset(){
    document.getElementById("sisi").value = ""
    document.getElementById("hasil").innerHTML = "Hasil :<br><br><br><br><br>"
}