const form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido!");
    } else {
        alert("Formulário inválido, o valor de Campo B precisa ser maior que o valor de Campo A.");
    }
});
