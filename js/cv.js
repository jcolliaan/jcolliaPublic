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
    });

  });