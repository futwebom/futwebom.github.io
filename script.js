window.onload = function() {
    fetch('https://futwebom.github.io/docs2.html')
        .then(response => response.text())
        .then(data => {
            // Extrai o conteúdo da página usando um elemento temporário
            var tempElement = document.createElement('div');
            tempElement.innerHTML = data;
            var contentToExtract = tempElement.querySelector('/html/body/iframe[1]');

            // Exibe o conteúdo extraído na página
            var contentContainer = document.getElementById('content');
            contentContainer.innerHTML = contentToExtract.innerHTML;
        })
        .catch(error => console.error('Erro ao extrair conteúdo:', error));
};
