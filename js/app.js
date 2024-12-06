function calcularIMC() {
    
    var nombre = document.getElementById("nombre").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var estatura = parseFloat(document.getElementById("estatura").value);

    if (!nombre || !peso || !estatura) {
        alert("Por favor, ingresa todos los campos.");
        return;
    }

    var imc = peso / (estatura * estatura);
    var resultadoTexto = nombre + ", tu IMC es: " + imc.toFixed(2);
    var categoria = "";
    var imagenSrc = "";

    if (imc < 18.5) {
        categoria = "Bajo peso";
        imagenSrc = "../images/bajopeso.jpg";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
        imagenSrc = "../images/pesonormal.jpeg";
    } else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso";
        imagenSrc = "../images/sobrepeso.jpeg";
    } else if(imc >=30 && imc < 35){
        categoria = "Obesidad 1"
        imagenSrc = "../images/obesidad1.png"
    } else if(imc >=35 && imc < 40){
        categoria = "Obesidad 2"
        imagenSrc = "../images/obesidad2.jpeg"
    } else  {
        categoria = "Obesidad 3";
        imagenSrc ="../images/obesidad3.png";
    }


    document.getElementById("resultado").innerHTML = resultadoTexto + "<br>Categoría: " + categoria;
    alert(categoria);
    
    document.getElementById("imagenIMC").src = imagenSrc;
}