document.addEventListener('DOMContentLoaded', function() {
    const hiberus = document.getElementById('hiberus');
    const texto = document.getElementById('hiberus-descripcion');
  
    hiberus.addEventListener('click', function() {
        if (texto.style.display === ''){
            texto.style.display = 'block';
        }
        else if (texto.style.display === 'none') {
            texto.style.display = 'block';
        } else {
            texto.style.display = 'none';
        }
        let icono = document.getElementById('chevronIconHiberus');
        rotarIcono(icono);
    });

    const capgeminiTitle = document.getElementById('capgemini-sfcc');
    const capgeminiSfccDesc = document.getElementById('capgemini-SFCC-descripcion');

    capgeminiTitle.addEventListener('click', function() {
        if (capgeminiSfccDesc.style.display === ''){
            capgeminiSfccDesc.style.display = 'block';
        }
        else if (capgeminiSfccDesc.style.display === 'none') {
            capgeminiSfccDesc.style.display = 'block';
        } else {
            capgeminiSfccDesc.style.display = 'none';
        }
        let icono = document.getElementById('chevronIconCapgemini');
        rotarIcono(icono);
    });

    const capgeminiTitleJava = document.getElementById('capgemini-java');
    const capgeminiJavaDesc = document.getElementById('capgemini-java-descripcion');

    capgeminiTitleJava.addEventListener('click', function() {
        if (capgeminiJavaDesc.style.display === ''){
            capgeminiJavaDesc.style.display = 'block';
        }
        else if (capgeminiJavaDesc.style.display === 'none') {
            capgeminiJavaDesc.style.display = 'block';
        } else {
            capgeminiJavaDesc.style.display = 'none';
        }
        let icono = document.getElementById('chevronIconCapgeminiJava');
        rotarIcono(icono);
    });

    const viseoTitle = document.getElementById('viseo');
    const viseoDesc = document.getElementById('viseo-descripcion');

    viseoTitle.addEventListener('click', function() {
        if (viseoDesc.style.display === ''){
            viseoDesc.style.display = 'block';
        }
        else if (viseoDesc.style.display === 'none') {
            viseoDesc.style.display = 'block';
        } else {
            viseoDesc.style.display = 'none';
        }
        let icono = document.getElementById('chevronIconViseo');
        rotarIcono(icono);
    });

    function rotarIcono(icono) {
        // let icono = document.getElementById('chevronIcon');
        let transformValue = icono.style.transform;

        // Verificar si el icono está rotado
        if (transformValue === 'rotate(180deg)') {
            // Si está rotado, regresar a la posición original
            icono.style.transform = "rotate(0deg)";
        } else {
            // Si no está rotado, rotar 180 grados
            icono.style.transform = "rotate(180deg)";
        }
    }

  });