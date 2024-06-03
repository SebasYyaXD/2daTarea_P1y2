function problema1() {
    console.log('Ejecutando problema1');
    var input = document.getElementById('p1-input').value;
    var palabras = input.split(' ');
    var palabrasInvertidas = palabras.reverse();
    var resultado = palabrasInvertidas.join(' ');
    document.getElementById('p1-output').textContent = resultado;
}

function problema3() {
    console.log('Ejecutando problema3');
    var input = document.getElementById('p3-input').value;
    var palabras = input.split(',');
    var palabraMaxUnicos = '';
    var maxUnicos = 0;

    function contarCaracteresUnicos(palabra) {
        var caracteresUnicos = [];
        for (var i = 0; i < palabra.length; i++) {
            if (caracteresUnicos.indexOf(palabra[i]) === -1) {
                caracteresUnicos.push(palabra[i]);
            }
        }
        return caracteresUnicos.length;
    }

    for (var i = 0; i < palabras.length; i++) {
        var numUnicos = contarCaracteresUnicos(palabras[i]);
        if (numUnicos > maxUnicos) {
            maxUnicos = numUnicos;
            palabraMaxUnicos = palabras[i];
        }
    }

    document.getElementById('p3-output').textContent = 'Palabra con más caracteres únicos: ' + palabraMaxUnicos;
}

document.getElementById('p1-button').onclick = problema1;
document.getElementById('p3-button').onclick = problema3;
